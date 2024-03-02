package struktutdata3;

import java.util.ArrayList;
import java.util.Scanner;


public class StruktutData3 {

    
    public static void main(String[] args) {
      // Mendefinisikan ukuran array dua dimensi
        System.out.println("3. Menginput dan mencetak array 2 dimensi menggunakan keyboard");
        int rows = 3;
        int columns = 3;

        // Membuat array dua dimensi
        int[][] array = new int[rows][columns];

        // Membuat objek Scanner untuk input dari keyboard
        Scanner scanner = new Scanner(System.in);

        // Input nilai untuk setiap elemen array
        System.out.println("Masukkan nilai untuk array:");

        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < columns; j++) {
                System.out.print("Nilai untuk baris " + (i + 1) + " kolom " + (j + 1) + ": ");
                array[i][j] = scanner.nextInt();
            }
        }

        // Menampilkan isi array
        System.out.println("Isi array:");
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < columns; j++) {
                System.out.print(array[i][j] + "\t");
            }
            System.out.println();
        }

        // Menutup objek Scanner
        scanner.close();
      
        System.out.println("4. Array list dengan tipe data wrapper");
        // Membuat ArrayList dengan tipe data wrapper (Integer)
        ArrayList<Integer> arrayList = new ArrayList<>();

        // Menambahkan nilai ke ArrayList
        arrayList.add(10);
        arrayList.add(20);
        arrayList.add(30);
        arrayList.add(40);
        arrayList.add(50);

        // Mencetak isi ArrayList
        System.out.println("Isi ArrayList:");
        for (int num : arrayList) {
            System.out.println(num);
        }
        System.out.println("5. Menambah, Menagkses,Mengganti, Menghapus, dan Membaca ukuran Arraylist ");
        
    }
    
}
