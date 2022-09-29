const express = require("express");

const router = express.Router();

const modelFabricante = require("../model/FabricanteModel");

router.get("/listarFabricantes", (req, res)=>{
    modelFabricante.findAll()
        .then(
            (fabricante)=>{
                return res.status(200).json(fabricante);
            }
        ).catch(
            (erro)=>{
                return res.status(400).json({
                    erroStatus: true,
                    erroMessagem: 'Houve um erro ao selecionar os dados do fabricante',
                    erroBancoDados: erro
                });
            }
        );
});

router.post("/inserirFabricantes", (req, res)=>{
    // RECEBER OS DADOS
    let {nome_fabricante, cnpj_fabricante} = req.body;

    // GRAVAR DADOS
    modelFabricante.create(
        {
            nome_fabricante,
            cnpj_fabricante
        }
    ).then(
        ()=>{
            return res.status(201).json({
                erroStatus: false,
                menssagemStatus: "Fabricante inserida com sucesso!!"
            });
        }
    ).catch(
        (erro)=>{
            return res.status(400).json({
                erroStatus: true,
                menssagemStatus: "Erro ao inserir fabricante!!",
                erroBancoDados: erro
            });
        }
    );
});

router.put("/alterarFabricantes", (req, res)=>{
    // RECEBER DADOS
    let {id, nome_fabricante, cnpj_fabricante} = req.body;

    // ALTERAR DADOS
    modelFabricante.update(
        {
            nome_fabricante,
            cnpj_fabricante
        },
        {where:{id}}
    ).then(()=>{
        return res.status(200).json({
            erroStatus: false,
            menssagemStatus: "Dados do fabricante alterado com sucesso!!"
        });
    }).catch(
        (erro)=>{
            return res.status(400).json({
                erroStatus: true,
                menssagemStatus: "Erro ao alterar os dados do fabricante!!",
                erroBancoDados: erro
            });
        }
    );
});

router.delete("/excluirFabricante/:id", (req, res)=>{
    // RECEBER DADOS
    let {id} = req.params;

    // DELETAR DADOS
    modelFabricante.destroy(
        {where: {id}}
    ).then(()=>{
        return res.status(200).json({
            erroStatus: false,
            menssagemStatus: "Exclusão de fabricante feita com sucesso!!"
        }).catch(
            (erro)=>{
                return res.status(400).json({
                    erroStatus: true,
                    menssagemStatus: "Erro ao excluir fabricante!!",
                    erroBancoDados: erro
                })
            }
        )
    })
});

module.exports = router;