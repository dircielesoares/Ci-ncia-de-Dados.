import { getCSS, tickConfig } from "./common.js";

async function quantidadeUsuarios() {
    const url = "https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json"
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDasRedes = Object.keys(dados)
    const quantidadeUsuarios = Object.values(dados)

    const data = [
        {
          x: 'nomeDasRedes',
          y: quantidadeDeUsuarios,
          type: 'bar',
          marker: {
            color: getCSS('--primary-color')
          }
        }
      ]
  
      const layout = {
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bg-color'),
        title: {
          text: 'Redes sociais com mais usuários no mundo',
           x: 0,
           font: {
               color: getCSS('--primary-color'),
               size: 30,
               font: getCSS('--font')
           }
        },
        xaxis: {
            tickfont: tickConfig,
            title: {
              text: 'nome das redes sociais',
              font: {
                color: getCSS('--seconary-color')
              }
            }
        },
        yaxis: {
            tickfont: tickConfig,
            title: {
            text: 'bilhoes de usuários ativos',
            font: {
            color: getCSS('--seconary-color')
            }
          }
        }
      }

    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('graficos-container').appendChild(grafico)
    Plotly.newPlot(grafico, data) 
    }
    
  quantidadeUsuariosPorRede()
