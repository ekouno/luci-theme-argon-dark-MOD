# luci-theme-argon-dark-MOD

syarat: harus sudah terinstall tema argon dan argon config terlebih dahulu

note: saya menggunakan firmware dari REYRE dan utak atik secara manual, mohon maaf apabila terjadi error

1. buka file manager lalu hapus semua isi folder di /www/luci-static/argon/
2. upload semua isi folder argon diatas ke /www/luci-static/argon/
3. buka /user/lib/lua/luci/themes/argon/ edit file footer.htm dan header.htm ganti dengan footer.htm dan header.htm file diatas
4. copy paste code di dalam file 10_system.js diatas ke file 10_system.js yg ada di /www/luci-static/resources/view/status/include/
5. copy paste code di dalam file index.htm diatas ke file index.htm yg ada di /usr/lib/lua/luci/view/admin_status/

## Screenshots
![desktop](/Screenshots/screenshot_pc.jpg)
![mobile](/Screenshots/screenshot_phone.jpg)
