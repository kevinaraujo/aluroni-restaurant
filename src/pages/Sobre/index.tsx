import styles from './Sobre.module.scss';
import stylesTema from 'styles/Tema.module.scss';
import Casa from 'assets/sobre/casa.png';
import Massa1 from 'assets/sobre/massa1.png';
import Massa2 from 'assets/sobre/massa2.png';

export default function Sobre() {
  const imagens = [Massa1, Massa2];

  return (
    <section>
      <h3 className={stylesTema.titulo}>Sobre</h3>
      <div className={styles.sobreNos}>
        <img src={Casa} alt="Casa Aluroni" />
        <div className={styles.sobreNos__texto}>
          <p>
            Nós do Aluroni oferecemos a vocês, nossos queridos clientes, a Massa Italiana Caseira mais saborosa e sofisticada de São Paulo! Prezamos pelos ingredientes tradicionais da culinária Italiana, frescos e de excelente qualidade para que sua experiência seja ainda mais intensa!
          </p>
          <p>
            Também possuímos uma cardápio de carnes com muitas opções de acordo com o seu gosto!
          </p>
          <p>
            Para acompanhar as massas italianas, Aluroni possui uma reserva de vinhos especiais, que harmonizam perfeitamente com o seu parto, seja carne ou massa!
          </p>
        </div>
      </div>

      <div className={styles.imagens}>
        { imagens.map((img, index) => (
          <div key={index} className={styles.imagens__imagem}>
            <img src={img} />
          </div>
        ))}
      </div>
    </section>
  );
}