
public class TesteFuncionario {

	public static void main(String[] args) {
		Funcionario samuel = new Funcionario();
		
		samuel.setCpf("222.222.222-22");
		samuel.setNome("Samuel Rocha");
		samuel.setSalario(2500.00);
		
		System.out.println(samuel.getNome());
		System.out.println(samuel.getBonififcacao());

	}

}
