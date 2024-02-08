## Cara menjalankan

Pertama install package

```bash
npm install || yarn install
```
Setelah sukses lanjut run

```bash
npm run dev || yarn dev
```

## Penjelasan

Pertama kali dijalankan data user akan kosong dan harus di isi dulu untuk merubah-ubah datanya.
Untuk schema data user berupa :

```bash
{
    name: "",
    title: "",
    description: "",
    avatar: "",
    cover: "",
    portfolio: [],
  }
```

## Perubahan UI

Ada perubahan UI di button `Add Portfolio` yang sebelumnya berada diatas pojok kanan, saya ubah diatas form input portfolio. tata letak saya ubah karena secara UX button `Add Portfolio` akan mudah digunakan jika berada diatas form input portfolio.