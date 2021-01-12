import React, { Component } from 'react';

import Slider from "../../components/slider/slider 2";

import Bodyy from './style';
import background from '../../components/img/background.jpg';

class Filmes extends Component{

    state= {
        filmes: [],
    }

    async componentDidMount() {
        await fetch("/api/filmes")
        .then((response) => response.json())
        .then(response => this.setState({ filmes: response}), console.log)
    }

    render() {

        const {filmes} = this.state;
        const filtrado = (num) =>{
            return filmes.filter(a => a.category_id === num.toString())
        }
            
            return(
            <Bodyy className="App">
                <div className="body">
                    <img src={background} className="background" alt="Background"/>
                    <header className="topheader">
                        <div className="group_A">
                            <input type="text" className="buscar" placeholder="buscar"/>
                            <div className="hamburguer">
                                <div className="barra1 ham"></div>
                                <div className="barra2 ham"></div>
                                <div className="barra3 ham"></div>
                            </div>
                        </div>
                    </header>
                    <div className="group_B">
                        <div>
                        <a href="100"><h2>Novidades Da Semana
 - {filtrado(38).length} Filmes</h2></a>
                            <Slider movies={filtrado(38)} />
                        </div>
                        <div>
                            <a href="100"><h2>007 - COLEÇÃO - {filtrado(88).length} Filmes</h2></a>
                            <Slider movies={filtrado(88)} />
                        </div>
                        <div>
                            <h2>Ação</h2>
                            <Slider movies={filtrado(3)} />
                        </div>
                        <div>
                            <h2>Animação infantil</h2>
                            <Slider movies={filtrado(15)} />
                        </div>
                        <div>
                            <h2>Aventura</h2>
                            <Slider movies={filtrado(4)} />
                        </div>
                        <div>
                            <h2>Cinema Nacional</h2>
                            <Slider movies={filtrado(26)} />
                        </div>
                        <div>
                            <h2>CLÁSSICOS</h2>
                            <Slider movies={filtrado(27)} />
                        </div>
                        <div>
                            <h2>COLEÇÕES</h2>
                            <Slider movies={filtrado(28)} />
                        </div>
                        <div>
                            <h2>Comédia</h2>
                            <Slider movies={filtrado(6)} />
                        </div>
                        <div>
                            <h2>DC Comics</h2>
                            <Slider movies={filtrado(29)} />
                        </div>
                        <div>
                            <h2>Documentarios</h2>
                            <Slider movies={filtrado(9)} />
                        </div>
                        <div>
                            <h2>Drama</h2>
                            <Slider movies={filtrado(10)} />
                        </div>
                        <div>
                            <h2>Faroeste</h2>
                            <Slider movies={filtrado(31)} />
                        </div>
                        <div>
                            <h2>Ficção</h2>
                            <Slider movies={filtrado(21)} />
                        </div>
                        <div>
                            <h2>Gospel</h2>
                            <Slider movies={filtrado(32)} />
                        </div>
                        <div>
                            <h2>Guerra</h2>
                            <Slider movies={filtrado(23)} />
                        </div>
                        <div>
                            <h2>HARRY POTTER</h2>
                            <Slider movies={filtrado(33)} />
                        </div>
                        <div>
                            <h2>marvel studios</h2>
                            <Slider movies={filtrado(34)} />
                        </div>
                        <div>
                            <h2>musica</h2>
                            <Slider movies={filtrado(81)} />
                        </div>
                        <div>
                            <h2>O Senhor Dos Anéis</h2>
                            <Slider movies={filtrado(35)} />
                        </div>
                        <div>
                            <h2>Os Atrapalhões</h2>
                            <Slider movies={filtrado(37)} />
                        </div>
                        <div>
                            <h2>Policial</h2>
                            <Slider movies={filtrado(8)} />
                        </div>
                        <div>
                            <h2>Romance</h2>
                            <Slider movies={filtrado(20)} />
                        </div>
                        <div>
                            <h2>Shows</h2>
                            <Slider movies={filtrado(36)} />
                        </div>
                        <div>
                            <h2>Suspense</h2>
                            <Slider movies={filtrado(22)} />
                        </div>
                        <div>
                            <h2>Star Wars</h2>
                            <Slider movies={filtrado(37)} />
                        </div>
                        <div>
                            <h2>Terror</h2>
                            <Slider movies={filtrado(14)} />
                        </div>
                    </div>
                </div>
            </Bodyy> 
        )
    }
}

export default Filmes;