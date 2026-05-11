enum SentidoMovimiento {
    //% block="avanzando"
    Avanzando,
    //% block="retrocediendo"
    Retrocediendo
}
enum LadoGiro {
    //% block="derecha"
    Derecha,
    //% block="izquierda"
    Izquierda
}
enum Potencia {
    //% block="despacio"
    Despacio,
    //% block="rapido"
    Rapido
}
//% weight=100 color=#0fbc11 icon="\uf1b9" block="Angelqueen"
namespace maqueenFacil {
    /**
     * Hace girar el coche Maqueen avanzando o retrocediendo hacia un lado a velocidad deseada.
     */
    //% block="girar %sentido hacia %lado rapidez %velocidad"
    //% weight=100
    export function girar(sentido: SentidoMovimiento, lado: LadoGiro, velocidad: Potencia): void {
        let PotenciaBaja = 124
        let PotenciaAlta = 255
        if (sentido == SentidoMovimiento.Avanzando && lado == LadoGiro.Derecha && velocidad == Potencia.Despacio) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, PotenciaBaja)
            maqueen.motorStop(maqueen.Motors.M2)
        }
        if (sentido == SentidoMovimiento.Avanzando && lado == LadoGiro.Derecha && velocidad == Potencia.Rapido) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, PotenciaAlta)
            maqueen.motorStop(maqueen.Motors.M2)
        }
        if (sentido == SentidoMovimiento.Avanzando && lado == LadoGiro.Izquierda && velocidad == Potencia.Despacio) {
            maqueen.motorStop(maqueen.Motors.M1)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, PotenciaBaja)
        }
        if (sentido == SentidoMovimiento.Avanzando && lado == LadoGiro.Izquierda && velocidad == Potencia.Rapido) {
            maqueen.motorStop(maqueen.Motors.M1)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, PotenciaAlta)
        }
        if (sentido == SentidoMovimiento.Retrocediendo && lado == LadoGiro.Derecha && velocidad == Potencia.Despacio) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, PotenciaBaja)
            maqueen.motorStop(maqueen.Motors.M2)
        }
        if (sentido == SentidoMovimiento.Retrocediendo && lado == LadoGiro.Derecha && velocidad == Potencia.Rapido) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, PotenciaAlta)
            maqueen.motorStop(maqueen.Motors.M2)
        }
        if (sentido == SentidoMovimiento.Retrocediendo && lado == LadoGiro.Izquierda && velocidad == Potencia.Despacio) {
            maqueen.motorStop(maqueen.Motors.M1)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, PotenciaBaja)
        }
        if (sentido == SentidoMovimiento.Retrocediendo && lado == LadoGiro.Izquierda && velocidad == Potencia.Rapido) {
            maqueen.motorStop(maqueen.Motors.M1)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, PotenciaAlta)
        }
    }
}
