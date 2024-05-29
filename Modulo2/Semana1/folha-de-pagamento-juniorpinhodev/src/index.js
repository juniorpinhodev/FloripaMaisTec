const readline = require('readline')
const fs = require('fs')
const PDFDocument = require('pdfkit')

const calcINSS = require('./calculo_inss');
const calcIR = require('./calculo_imposto_renda')
const calcLiquidPay = require('./calculo_salario_liquido')

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let name = ""
input.question("Por favor, digite seu nome completo:", (nameInput) => {
    name = nameInput

    let CPF = 0
    input.question("Por favor, digite seu CPF:", (cpfInput) => {
        CPF = cpfInput

        let month = 0
        input.question("Por favor, digite o mês do pagamento:", (monthInput) => {
            month = monthInput

            let grossPay = 0
            input.question("Por favor, digite o seu salário bruto:", (grossPayInput) => {
                grossPay = grossPayInput

                const INSS = calcINSS(grossPay)
                const IR = calcIR(grossPay)
                const liquidPay = calcLiquidPay(grossPay)

                console.log('\n___ Folha de Pagamento ___')
                console.log(`Nome: ${name}`)
                console.log(`CPF: ${CPF}`)
                console.log(` ======================== `)
                console.log(`Mês do Pagamento: ${month}`)
                console.log(`Salário Bruto: R$${grossPay}`)
                console.log(`INSS: R$${INSS}`)
                console.log(`Imposto de Renda: R$${IR}`)
                console.log(`Outros Descontos: R$0,00`)
                console.log(` ======================== `)
                console.log(`Salário Líquido: R$${liquidPay}`)

                
                //Usuário deseja gerar PDF?

                input.question('Você deseja Salvar em PDF? (S/N) Por favor, Digite "S" para SIM ou "N" para NÃO: ', (pdfInput) => {
                    if (pdfInput.toUpperCase() === 'S') {
                        createPDF()
                    } else if (pdfInput.toUpperCase() === 'N') {
                        console.log('Obrigado por utilizar o nosso programa!')
                    } else (console.log('Resposta incorreta. Digite apenas S ou N. Programa encerrado'))

                input.close()
            })

                // Função para gerar o PDF
                function createPDF() {
                    const doc = new PDFDocument()
                    doc.pipe(fs.createWriteStream(`${name}_holerite_mês${month}.pdf`))
                    doc.fontSize(21)
                    doc.font('Times-Bold')

                    doc.text(`Holerite - mês ${month} - ${name}`).fontSize(16)
                    doc.text(` __________________________________________ `)
                    doc.text('\n')
                    doc.text(`Data de Emissão: ${new Date().toLocaleDateString()}`)
                    doc.text('\n')
                    doc.text(`Nome: ${name}`)
                    doc.text(`CPF: ${CPFcharacters(CPF)}`)
                    doc.text(`Salário Bruto: R$${grossPay}`)
                    doc.text('\n')
                    doc.text(`Descontos:`)
                    doc.text(`INSS: R$${INSS}`)
                    doc.text(`Imposto de Renda: R$${IR}`)
                    doc.text(`Outros Descontos: R$0,00`)
                    doc.text('\n')
                    doc.text(` __________________________________________ `)
                    doc.text('\n')
                    doc.text(`Salário Líquido: R$${liquidPay}`)
                    doc.end()

                    console.log('\n')
                    console.log('O seu PDF foi gerado com sucesso!')
                    console.log('Programa finalizado.')
                }
            }) 
        })
    })
})

// formatação dos caracteries do CPF
function CPFcharacters(cpf) {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
} module.exports = CPFcharacters