package br.com.bytebank.banco.modelo;

/**
 * Classe que representa um cliente no ByteBank.
 * 
 * @author Samuel Rocha
 * @version 0.1
 * */
public class Cliente {
	private String nome;
	private String cpf;
	private String profissao;
	
	public String getNome() {
		return nome;
	}
	
	public void setNome(String nome) {
		this.nome = nome;
	}
	
	public String getCpf() {
		return cpf;
	}
	
	public void setCpf(String cpf) {
		this.cpf = cpf;
	}
	
	public void setProfissao(String profissao) {
		this.profissao = profissao;
	}
	
	public String getProfissao() {
		return profissao;
	}
}
