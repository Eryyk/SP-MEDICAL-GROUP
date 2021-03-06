import React, { Component } from 'react';

class Medico extends Component {

    realizarLogout() {
        localStorage.clear();
        window.location.href = '/';
    }

    render() {
        return (
            <div className="admin">
                <div className="navegador">
                    <div>
                        <h2 className="h1">Médico</h2>
                    </div>
                    <div className="navegaDiv">
                        <div className="direciona">
                            <i id="icon" class="fas fa-file-medical-alt"></i>
                            <a className="navega" href="http://localhost:3000/Medico/Consultas">Consultas</a>
                        </div>
                        <div className="direciona">
                            <i id="icon" class="fas fa-sign-out-alt"></i>
                            <a className="navega" onClick={this.realizarLogout.bind(this)}>Sair</a>
                        </div>

                    </div>
                </div>
                <div></div>
            </div>

        );
    }
}

export default Medico;