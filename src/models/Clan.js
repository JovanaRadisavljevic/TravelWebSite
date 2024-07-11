class Clan {
    constructor(ime, email, sifra, prihvatioUslove) {
      this.ime = ime;
      this.email = email;
      this.sifra = sifra;
      this.prihvatioUslove = prihvatioUslove;
    }
  
    //metode za validaciju podataka
    isValid() {
      // provera da li su sva polja popunjena
      return this.ime && this.email && this.sifra && this.prihvatioUslove;
    }
  
    //metode za čuvanje podataka, ispisujem u konzoli clana
    sacuvaj() {
      console.log('Čuvanje člana:', this.ime, this.email, this.sifra);
    }
  }
  
  export default Clan;
  