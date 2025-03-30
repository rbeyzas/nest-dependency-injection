cpu'nun power'a ihtiyacı var. burada dependecy injection şöyle sağlanır:

- power servisinde @Injectable ile başka yerlerde kullanılabileceğini söylüyoruz.
- sonra power module'de PowerService'i export ediyoruz.
- sonra kullanmak istediğmiz yerde yanş cpu'da module içerisinde import ediyoruz.
- sonra cpu service'de contructor ile kullanıyoruz
