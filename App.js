import React from 'react';
import { ScrollView, View, Text, ImageBackground } from 'react-native';

import imgCeu from './assets/por-do-sol.jpg';
import estilos from './estilos';

export default function App() {
  return (
    <ScrollView>
      
      <ImageBackground style={ estilos.container } source={ imgCeu } >

        <View style={estilos.box}>
          <Text style={ estilos.boxTitulo }>Luz do sol</Text>
          <Text style={ estilos.boxParagrafo }>O céu envia-nos cerca de 10% da luz do Sol durante o dia. O seu brilho deve-se à difusão da luz do Sol pelas moléculas na atmosfera.  Quando olhamos para o céu, estamos a ver apenas os raios de Sol que foram desviados pelas moléculas da atmosfera de tal modo que ficam exactamente direcionados para os nossos olhos.</Text>
        </View>
        
        <View style={estilos.box}>
          <Text style={ estilos.boxTitulo }>O céu é azul</Text>
          <Text style={ estilos.boxParagrafo }>O céu não é amarelado como o Sol porque a difusão funciona como uma peneira que só reflete raios azulados. É também devido ao mesmo fenômeno que o céu fica acinzentado (lácteo) quando há luar e faz com que não se vejam tão bem as estrelas.</Text>
        </View>
        
        <View style={estilos.box}>
          <Text style={ estilos.boxTitulo }>Deveria ser violeta</Text>
          <Text style={ estilos.boxParagrafo }>O céu, de fato, deveria ser mais violeta, embora, por causa da absorção da atmosfera, haja menos violeta na luz do Sol. O que se passa é que os nossos olhos não tem nenhum receptor especialmente sensível a essa cor.</Text>
        </View>
        
        <View style={estilos.box}>
          <Text style={ estilos.boxTitulo }>De noite</Text>
          <Text style={ estilos.boxParagrafo }>De noite, o céu é negro porque não existe difusão de luz solar. No entanto, se o universo é infinito em tamanho e as estrelas e galáxias estão distribuídas por este universo infinito, então poderíamos esperar ver uma estrela em cada direção em que observamos o céu.</Text>
        </View>

      </ImageBackground>
      
    </ScrollView>
  );
}


