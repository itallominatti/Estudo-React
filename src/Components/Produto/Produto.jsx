import React from 'react'
import styles from './Produto.module.css'
import { useParams } from 'react-router-dom';

const Produto = () => {
    const [produto, setProduto] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    const { id } = useParams();

    React.useEffect(() => {
        setLoading(true);
        try {
            fetch(`https://ranekapi.origamid.dev/json/api/produto/${id}`)
                .then(response => response.json())
                .then(json => setProduto(json));
        } catch (erro) {
            setError('Um erro ocorreu');
        } finally {
            setLoading(false);
        }
    }, [id]);
    if (loading) return <div className='loading'></div>
    if (error) return <p>{error}</p>
    if (produto === null) return null;
    return (
        <section className={`${styles.produto} animeLeft`}>
            <div>
                {produto.fotos.map(foto => <img key={foto.src} src={foto.src} alt={foto.titulo} />)}
            </div>
            <div>
                <h1>{produto.nome}</h1>
                <span className={styles.preco}> R$ {produto.preco}</span>
                <p className={styles.descricao}>{produto.descricao}</p>
            </div>
        </section>
    )
}

export default Produto