import styles from './Perfil.module.css'

const Perfil = ({ nomeUsuario }) => {
    // const usuario = {
    //     nome: "Joao Gustavo",
    //     avatar: 'https://github.com/JoaoMoreiraLuz.png'
    // }

    // const {endereco, nome} = props;

    return (
        <header className={styles.header}>
            {/* {JSON.stringify(props)} */}
            <img className={styles.avatar} src={`https://github.com/${nomeUsuario}.png`}/>
            <h1 className={styles.name}> 
                {nomeUsuario}
             </h1>
        </header>
    )
}

export default Perfil