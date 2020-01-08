
public class TesteGerente {
	
	public static void main(String[] args) {
		Gerente cristiano = new Gerente();
		
		cristiano.setNome("Cristiano Leiva");
		cristiano.setCpf("555.555.555-55");
		cristiano.setSalario(6000.00);
		
		System.out.println(cristiano.getNome());
		System.out.println(cristiano.getBonificacao());
		
		cristiano.setSenha(01010011);
		
		boolean autenticou = cristiano.autentica(01010011);
		System.out.println(autenticou);
		
	}
}
