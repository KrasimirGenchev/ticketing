import 'bootstrap/dist/css/bootstrap.css';
import buildClient from '../api/build-client';
import Header from '../component/header';

const AppComponent = ({ Component, pageProps, currentUser }) => {
    return (<>
        <Header currentUser={currentUser}/>
        <Component {...pageProps} />
    </>
    );
};

AppComponent.getInitialProps = async (AppContext) => {
    const client = buildClient(AppContext.ctx);
    const { data } = await client.get('/api/users/currentuser');

    let pageProps = {};
    if (AppContext.Component.getInitialProps) {
        pageProps = await AppContext.Component.getInitialProps(AppContext.ctx);
    }

    console.log(data);

    return {
        pageProps,
        ...data
    };
};

export default AppComponent