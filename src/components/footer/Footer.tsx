const Footer = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: '5px'}}>
            <span>Author: {window.AUTHOR}</span>
            <span>{window.AUTHOR_EMAIL}</span>

        </div>
    );
};

export default Footer;
