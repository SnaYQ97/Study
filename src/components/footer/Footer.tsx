import {useEffect, useMemo, useState} from "react";
import webJSON_data_url from '../../assets/web.json?url';

const Footer = () => {
    const [fetchAuthor, setFetchAuthor] = useState<
        {
            isLoading: boolean;
            isError: boolean;
            data: {
                author: {
                    name: string;
                    surname: string;
                    contact: {
                        email: string;
                    }
                }
            } | null;
        }>({
        isLoading: true,
        isError: false,
        data: null
    });

    const author = useMemo(() => {
        if (fetchAuthor.data) {
            return fetchAuthor.data.author;
        }
        return null;
    }, [fetchAuthor])

    useEffect(() => {
        setFetchAuthor({
            isLoading: true,
            isError: false,
            data: null
        })
        fetch(webJSON_data_url).then(
            response => response.json()
        ).then(
            data=> {
                console.log({data})
                setFetchAuthor({
                    isLoading: false,
                    isError: false,
                    data: data
                })
            }
        ).catch(
            error => {
                console.log({error})
                setFetchAuthor({
                    isError: true,
                    isLoading: false,
                    data: null
                })
            }
        )
    }, []);

    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: '5px'}}>
            {fetchAuthor.isLoading &&
              <span>Loading...</span>
            }
            {fetchAuthor.isError &&
              <span>Error...</span>
            }
            {author &&
              <>
                  <span>Author: {`${author.name} ${author.surname}`}</span>
                  <span>{author.contact.email}</span>
              </>
            }
        </div>
    );
};

export default Footer;
