
public class TesteFuncionario {

	public static void main(String[] args) {
		Gerente samuel = new Gerente();
		
		samuel.setCpf("222.222.222-22");
		samuel.setNome("Samuel Rocha");
		samuel.setSalario(2500.00);
		
		System.out.println(samuel.getNome());
		System.out.println(samuel.getBonificacao());

	}

}
