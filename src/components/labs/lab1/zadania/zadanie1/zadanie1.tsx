import './index.css'
const Zadanie1 = () => {
    return (
        <>
            <div className={'zadanie1'}>
                <h1>Zadanie 1: Instalacja Apache Tomcat</h1>
                <p>
                    Wykonałem te ktorki w React i TypeScript na Node.js
                    Skonfigurowałem serwer vite na aby uruchamaiał się na porcie 8080
                    w pliku vite.config.ts ustawiem:
                    <pre>{`
                   server: {
                      port: 8080, // oznacza to, że serwer będzie uruchomiony na porcie 8080
                      open: 'lab2/kula' // oznacza to, że po uruchomieniu serwera zostanie otwarta przeglądarka z adresem http://localhost:8080/lab2/kula
                   },
                    `}
                </pre>
                </p>
            </div>
        </>
    );
};

export default Zadanie1;
