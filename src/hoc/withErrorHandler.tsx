import React, {Component} from 'react';

import Modal from '../components/UI/modal/Modal';
import Aux from './Aux';

interface IwithErrorHandlerState {
    error: any;
}

const withErrorHandler = (WrappedContent: any, axios: any) => {
    return class extends Component<{}, IwithErrorHandlerState>{
        reqInterceptor:any;
        resInterceptor:any;

        state: IwithErrorHandlerState = {
            error: null
        }

        componentWillMount(){
            this.reqInterceptor = axios.interceptors.request.use((req:any) => {
                this.setState({error: null});
                return req;
            });
            this.resInterceptor = axios.interceptors.response.use((res:any) => res, (error:any) => {
                this.setState({error: error});
            });
        }

        componentWillUnmount(){
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }

        errorConfirmedHandler = () => {
            this.setState({error: null});
        }

        render() {
            let message: any | undefined;
            
            if(this.state.error != null){
                message = this.state.error.message;
            } else {
                message = null;
            }

            return (
                <Aux>
                    <Modal
                        show={!!this.state.error}
                        modalClose={this.errorConfirmedHandler}>
                        {message}
                    </Modal>
                    <WrappedContent {...this.props}/>
                </Aux>
            );
        }
    }
}

export default withErrorHandler;