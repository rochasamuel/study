
public class TesteContaComposta {
	public static void main(String[] args) {
		Conta contaDoSamuel = new Conta(1507, 70140);
		
		Cliente samuel = new Cliente();
		
		contaDoSamuel.setTitular(samuel);
		contaDoSamuel.getTitular().setNome("Samuel Rocha");
				
		System.out.println(contaDoSamuel.getTitular().getNome());
	}
}
