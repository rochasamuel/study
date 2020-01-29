package br.com.bytebank.banco.test.util;

import java.util.ArrayList;

import br.com.bytebank.banco.modelo.Conta;
import br.com.bytebank.banco.modelo.ContaCorrente;

public class TesteArrayListEquals {
	
	public static void main(String[] args) {
		// [<  >] GENERICS
		ArrayList<Conta> lista = new ArrayList<Conta>();
		
		Conta cc1 = new ContaCorrente(22, 22);
		Conta cc2 = new ContaCorrente(22, 22);
		
		lista.add(cc1);
		
		boolean existe = lista.contains(cc2);
		System.out.println("Já existe? " + existe);

		for(Object oRef : lista) {
			System.out.println(oRef);
		}
	}
}
