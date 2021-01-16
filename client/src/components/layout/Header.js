import React, { useContext, useState } from 'react';
import { Button } from 'antd';
import AuthModal from '../modals/AuthModal';
import { CoreContext } from '../Provider';

function Header() {
    const [visible, setVisible] = useState(false);
    const [authType, setAuthType] = useState('signup');
    const { token, setUploadVisible, logout } = useContext(CoreContext);

    const showModal = (formType) => {
        setAuthType(formType)
        setVisible(true)
    }

    const handleOk = () => {
        return handleCancel();
    }

    const handleCancel = () => {
        setVisible(false)
    }

    const renderButtonGroup = () => {
        if(token) {
            return(
                <div className="navbtn-group">
                    <Button
                        className="navbtn"
                        onClick={logout}
                    >
                        Logout
                    </Button>
                    <Button
                        className="navbtn"
                        type="primary"
                        onClick={() => setUploadVisible(true)}
                    >
                        Upload
                    </Button>
                </div>
            )
        } else {
            return(
                <div className="navbtn-group">
                    <Button
                        className="navbtn"
                        onClick={() => showModal('login')}
                    >
                        Login
                    </Button>
                    <Button
                        className="navbtn"
                        type="primary"
                        onClick={() => showModal('signup')}
                    >
                        Signup
                    </Button>
                </div>
            )
        }
    }

    return (
        <>
            <div className="header">
                <div className="navbar-group">
                    <div className="title-div">
                        <span className="title">egami</span>                        
                    </div>
                </div>

                {renderButtonGroup()}
            </div>

            <AuthModal
                visible={visible}
                authType={authType}
                handleOk={handleOk}
                handleCancel={handleCancel}
            />
        </>
    ) 
}

export default Header;