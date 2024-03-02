
package strukturdata4;

import java.util.ArrayList;


public class StrukturData4 {

    
    public static void main(String[] args) {
         // Membuat ArrayList dengan tipe data wrapper Integer
        ArrayList<Integer> arrayList = new ArrayList<>();

        // Penambahan nilai ke ArrayList
        arrayList.add(10);
        arrayList.add(20);
        arrayList.add(30);
        arrayList.add(40);
        arrayList.add(50);

        // Mencetak isi ArrayList
        System.out.println("Isi awal ArrayList:");
        System.out.println(arrayList);

        // Mengakses nilai pada indeks tertentu
        int nilaiPertama = arrayList.get(0);
        System.out.println("Nilai pada indeks 0: " + nilaiPertama);

        // Mengganti nilai pada indeks tertentu
        arrayList.set(2, 99);
        System.out.println("Isi ArrayList setelah mengganti nilai pada indeks 2:");
        System.out.println(arrayList);

        // Menghapus nilai pada indeks tertentu
        arrayList.remove(3);
        System.out.println("Isi ArrayList setelah menghapus nilai pada indeks 3:");
        System.out.println(arrayList);

        // Membaca ukuran ArrayList
        int ukuran = arrayList.size();
        System.out.println("Ukuran ArrayList: " + ukuran);
    }
    
}
