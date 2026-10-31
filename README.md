# Każdy ma miejsce

Zestaw sześciu gier edukacyjnych o współpracy, różnych potrzebach i wspólnym uczestnictwie.

**Autor:** Michał Siwkowski

| Nr | Gra | Plik | W skrócie |
|---|---|---|---|
| 1 | Most współpracy | `most-wspolpracy.html` | Najlepiej we dwoje: jedna osoba zna kolory, druga kształty. Razem budujecie pięć mostów. |
| 2 | Klasa dla każdego | `klasa-dla-kazdego.html` | Poznajcie potrzeby czterech osób i rozmieśćcie wyposażenie sali. |
| 3 | Co powiesz? | `co-powiesz.html` | Osiem szkolnych rozmów. Wybieracie wypowiedź i widzicie, co dzieje się dalej. |
| 4 | Każdy ma swoją drogę | `kazdy-ma-swoja-droge.html` | Dostosowujecie otoczenie, aby trzy osoby dotarły na wspólne spotkanie. |
| 5 | Wspólny piknik | `wspolny-piknik.html` | Planujecie miejsce, aktywności i wyposażenie, tak aby każdy mógł dołączyć. |
| 6 | Detektywi barier | `detektywi-barier.html` | Szukacie przeszkód na ilustracjach i wybieracie zmiany, które pomagają. |

`index.html` to menu zestawu. Każda gra ma u góry przycisk **„Wszystkie gry”**, który wraca do menu.

---

## Uruchomienie na komputerze

1. Rozpakuj `kazdy-ma-miejsce.zip`.
2. Otwórz plik `index.html` w przeglądarce (dwuklik).
3. Wybierz grę.

Nie trzeba instalować programów, mieć konta ani połączenia z internetem. Wszystkie pliki muszą być w **jednym folderze**, bo linki między menu i grami są względne (`./index.html`, `./co-powiesz.html` itd.).

Gry działają w aktualnych przeglądarkach: Chrome, Edge, Firefox i Safari.

## Publikacja na GitHub Pages

1. Na GitHubie utwórz nowe, **publiczne** repozytorium, np. `kazdy-ma-miejsce`.
2. Wybierz **Add file → Upload files** i przeciągnij **zawartość** folderu: `index.html`, sześć plików gier, `README.md` i `.nojekyll`. Pliki mają leżeć bezpośrednio w repozytorium, a nie w podfolderze.
   - Plik `.nojekyll` jest ukryty (nazwa zaczyna się od kropki). Jeśli go nie widać, można go pominąć — strona zadziała również bez niego.
3. Zatwierdź zmiany przyciskiem **Commit changes**.
4. Wejdź w **Settings → Pages**. W części **Build and deployment** ustaw:
   - **Source:** *Deploy from a branch*,
   - **Branch:** `main`, folder `/ (root)`,
   - kliknij **Save**.
5. Po około minucie strona będzie dostępna pod adresem:
   `https://<twoja-nazwa-użytkownika>.github.io/kazdy-ma-miejsce/`

Adres zawiera nazwę repozytorium. Zestaw używa wyłącznie ścieżek względnych, więc działa pod takim adresem bez dodatkowej konfiguracji.

Jeśli repozytorium będzie miało inną nazwę, zmieni się tylko końcówka adresu.

## Wspólne ustawienia dostępności

W menu i w każdej grze są trzy ustawienia:

- **Większy tekst**
- **Wysoki kontrast**
- **Ograniczone animacje**

Ustawienie wybrane w menu działa we wszystkich grach. Zmiana w jednej grze działa w menu i w pozostałych grach.

Ustawienia są zapamiętywane tylko w tej przeglądarce, na tym urządzeniu (pamięć `localStorage`, wspólny klucz `kazdyMaMiejsce.ustawienia`). Jeśli przeglądarka blokuje zapamiętywanie, na przykład w trybie prywatnym z ostrymi ustawieniami, gry działają normalnie, a ustawienia obowiązują do zamknięcia strony.

Dodatkowe ustawienia pojedynczych gier zostają bez zmian, na przykład „Wspólny podgląd wskazówek” w „Moście współpracy”.

## Prywatność

Gry nie łączą się z internetem, nie zbierają danych, nie używają plików cookie ani zewnętrznych bibliotek. Pamiętane są wyłącznie ustawienia dostępności.

## Edycja treści

Każda gra to jeden plik HTML z kodem, stylem i ilustracjami w środku. Miejsca do edycji są oznaczone w kodzie komentarzami z ikoną ✏️, m.in.:

- **Menu:** lista `GAMES` w `index.html` — kolejność kafelków, opisy, nazwy plików.
- **Co powiesz?:** struktura `SCENARIOS` — sytuacje, wypowiedzi, zakończenia, wyjaśnienia. Pola `audioSrc` pozwalają dodać nagrania uczniów jako `data:audio/...`. Nagranie powinno odpowiadać aktualnemu tekstowi wypowiedzi.
- **Klasa dla każdego:** `CHARACTERS`, `ITEMS`, `ZONES`, `PLACEMENT_RULES`, `NEED_RULES`.
- **Most współpracy:** tablica `ROUNDS` w części „DANE GRY”.
- **Każdy ma swoją drogę:** sekcja „DANE MAP”. Autotesty logiki można uruchomić w konsoli przeglądarki poleceniem `KMSD.runSelfTests()`.

Po zmianie nazwy pliku gry zaktualizuj ją także w liście `GAMES` w `index.html`.

## Co sprawdzono przed publikacją

Testy automatyczne w przeglądarce Chromium:

- menu → gra → „Wszystkie gry” → menu dla każdej gry, lokalnie (`file://`) i spod adresu z podkatalogiem jak na GitHub Pages;
- wspólne ustawienia w obie strony, także przy powrocie przyciskiem „Wstecz”;
- działanie przy zablokowanej pamięci przeglądarki;
- obsługa klawiaturą i widoczny fokus;
- szerokości 390, 768 i 1366 px, ze zwykłym i większym tekstem;
- zatrzymywanie dźwięku i czytania na głos przy wyjściu z gry;
- brak połączeń z internetem;
- wbudowane autotesty gier.

Nie były wykonane testy z czytnikami ekranu ani na fizycznych urządzeniach dotykowych.
