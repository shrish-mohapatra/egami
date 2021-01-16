import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'
import { notification } from 'antd'

const DEV_URL = "http://localhost:5000"

export const CoreContext = createContext()

export const CoreProvider = ({children}) => {
    const [token, setToken] = useState(null)
    const [user, setUser] = useState(null)

    const [uploadVisible, setUploadVisible] = useState(false)

    const updateAuth = (result) => {
        localStorage.setItem('token', result.token)
        localStorage.setItem('user', JSON.stringify(result.user))

        setToken(result.token)
        setUser(result.user)
    }

    const localAuth = () => {
        const token = localStorage.getItem('token')
        const user = JSON.parse(localStorage.getItem('user'))

        if(token && user) {
            setToken(token)
            setUser(user)
        }
    }

    useEffect(() => {
        localAuth();
    }, [])

    return(
        <CoreContext.Provider
            value={{
                token,
                user,
                
                setToken,
                setUser,

                uploadVisible,
                setUploadVisible,

                fetchImages: async() => {
                    try {
                        const result = await axios.get(DEV_URL + "/api/image/get");
                        return result.data.results
                    } catch(error) {
                        console.log(error.message)
                        
                        notification['error']({
                            message: 'Something went wrong',
                            description: "Unable to fetch images from server.",
                            placement: "bottomLeft"
                        })

                        return []
                    }
                },

                uploadImage: async(args, file) => {
                    let formData = new FormData()
                    formData.append("upload", file)

                    Object.keys(args).map(field => formData.append(field, args[field]))
                    
                    try {
                        await axios.post(
                            DEV_URL + "/api/image/create",
                            formData,
                            {
                                headers: {
                                    'Content-Type': 'multipart/form-data',
                                    token
                                }
                            }
                        )

                        notification['success']({
                            message: 'File Upload Success',
                            placement: "bottomLeft"
                        })

                        window.location.reload(false);
                    } catch(error) {
                        console.log(error.response.data)
                        notification['error']({
                            message: 'File Upload Error',
                            description: "Unable to upload image.",
                            placement: "bottomLeft"
                        })
                    }
                },
                
                authenticate: async(args) => {
                    try {
                        const result = await axios.post(
                            DEV_URL + "/api/user/" + args.authType,
                            args
                        )

                        updateAuth(result.data)

                        notification['success']({
                            message: 'Welcome ' + result.data.user.name,
                            placement: "bottomLeft"
                        })

                    } catch(error) {
                        console.log(error.response.data.message)

                        notification['error']({
                            message: 'Authentication Error',
                            description: error.response.data.message,
                            placement: "bottomLeft"
                        })
                    }
                },

                logout: () => {
                    setUser(null);
                    setToken(null);

                    localStorage.clear();
                },
            }}
        >
            {children}
        </CoreContext.Provider>
    )
}