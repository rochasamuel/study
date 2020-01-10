
public class TestaCondicional2 {
	public static void main(String[] args) {
		System.out.println("testando condicionais");

		int idade = 16;
		//int quantidadePessoas = 1;
		boolean acompanhado = true;

		if (idade >= 18 ||  acompanhado) {
			System.out.println("seja bem vindo");
		} else {
			System.out.println("infelizmente você não pode entrar");
		}

		// caso haja apenas uma instrução não é necessário o uso das chaves {}
		// if (idade <= 20) System.out.println("você tem menos de 20 anos");
	}
}
