//contrato autenticavel
	//quem assina o contra [implements] precisa implementar os métodos dele
public abstract interface Autenticavel{
	
	public abstract void setSenha(int senha);
	
	public abstract boolean autentica(int senha);

}
