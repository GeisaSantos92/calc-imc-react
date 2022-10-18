import styles from './App.module.css';
import poweredImage from './assets/imc.png'
import {useState} from 'react';
import {levels, calculateImc} from './helpers/imc'
import {GridItem} from './components/GridItem';
import leftArrowImage from './assets/leftarrow.png';

const App = () => {

  const [heightField, setHeightField] = useState(0);
  const [weightField, setWeightField] = useState(0);
  const [toShow, setToShow] = useState();

  const handleCalculateButton= () => {
    if(heightField && weightField) {
      setToShow(calculateImc(heightField, weightField));
    }else{
      alert('Digite todos os campos!')
    }
  }

  const handleBackButton = () =>{
    setToShow(null)
    setHeightField(0)
    setWeightField(0)
  }


  return(
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImage} alt=""width={50} />
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule o seu IMC</h1>
          <p>IMC é a sigla para índice de massa corpórea, parâmetro
              adotado pela OMS para calcular o peso ideal de cada pessoa.
          </p>

          <input
            
            placeholder='Digite a sua altura. Ex: 1.5 (em metros)'
            value={heightField > 0 ? heightField : ''}
            onChange={e => setHeightField(e.target.value)}
            disabled={toShow ? true : false}
          />

          <input
          
            placeholder='Digite seu peso. Ex: 75.5 (em Kg)'
            value={weightField > 0 ? weightField : ''}
            onChange={e => setWeightField(e.target.value)}
            disabled={toShow ? true : false}
          />

          <button onClick={handleCalculateButton} disabled={toShow ? true : false}>Calcular</button>
        </div>
        <div className={styles.rightSide}>
          {!toShow &&
          <div className={styles.grid}>
              {levels.map((item, index)=>(
                <GridItem key={index} item={item}/>
            ))}
          </div>
          }
          {toShow &&
            <div className={styles.rightBig}>
              <div className={styles.rightArrow} onClick={handleBackButton}>
                <img src={leftArrowImage} alt=""width={25} />
              </div>
              <GridItem item={toShow}/>
            </div>
          }
        </div>
      </div>
    </div>
  );
}   

export default App;