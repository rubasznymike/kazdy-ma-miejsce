# Każdy ma miejsce

Zestaw sześciu gier edukacyjnych o współpracy, różnych potrzebach i wspólnym uczestnictwie.

**Autor:** Michał Siwkowski · **Strona:** https://rubasznymike.github.io/kazdy-ma-miejsce/

**English version:** https://rubasznymike.github.io/kazdy-ma-miejsce/?lang=en — *Everyone Belongs*, a set of six games about working together, different needs and taking part together (for eTwinning partners and English lessons).

| Nr | Gra | Plik | W skrócie |
|---|---|---|---|
| 1 | Most współpracy | `most-wspolpracy.html` | Najlepiej we dwoje: jedna osoba zna kolory, druga kształty. Razem budujecie pięć mostów. |
| 2 | Klasa dla każdego | `klasa-dla-kazdego.html` | Poznajcie potrzeby czterech osób i rozmieśćcie wyposażenie sali. |
| 3 | Co powiesz? | `co-powiesz.html` | Osiem szkolnych rozmów. Wybieracie wypowiedź i widzicie, co dzieje się dalej. |
| 4 | Każdy ma swoją drogę | `kazdy-ma-swoja-droge.html` | Dostosowujecie otoczenie, aby trzy osoby dotarły na wspólne spotkanie. |
| 5 | Wspólny piknik | `wspolny-piknik.html` | Planujecie miejsce, aktywności i wyposażenie, tak aby każdy mógł dołączyć. |
| 6 | Detektywi barier | `detektywi-barier.html` | Szukacie przeszkód na ilustracjach i wybieracie zmiany, które pomagają. |

Pozostałe pliki:

| Plik | Do czego służy |
|---|---|
| `index.html` | Menu zestawu: gry, postacie, sposób grania, wspólne ustawienia. |
| `nauczyciel.html` | Przewodnik dla nauczyciela: cele, lekcja 45 minut, pytania do rozmowy, dostosowania, karty do druku. |
| `manifest.webmanifest`, `sw.js`, `ikony/` | Tryb offline i dodawanie zestawu do ekranu głównego telefonu lub tabletu. |
| `podglad.png` | Obrazek wyświetlany po wklejeniu linku (Teams, Messenger, e-mail). |
| `LICENSE.md` | Licencja: treści CC BY-SA 4.0, kod MIT. |
| `.nojekyll` | Informuje GitHub Pages, że pliki mają być udostępnione bez przetwarzania. |

---

## Uruchomienie na komputerze

1. Rozpakuj `kazdy-ma-miejsce.zip`.
2. Otwórz `index.html` w przeglądarce (dwuklik).

Nie trzeba instalować programów, konta ani internetu. Wszystkie pliki muszą być w **jednym folderze** (z podfolderem `ikony`), bo linki są względne.

## Publikacja na GitHub Pages

1. Utwórz **publiczne** repozytorium, np. `kazdy-ma-miejsce`.
2. **Add file → Upload files** — przeciągnij **zawartość** folderu (razem z podfolderem `ikony`) i zatwierdź **Commit changes**.
3. **Settings → Pages → Build and deployment**: *Deploy from a branch*, gałąź `main`, folder `/ (root)`, **Save**.
4. Po chwili strona działa pod adresem `https://<login>.github.io/kazdy-ma-miejsce/`.

Jeśli repozytorium ma inną nazwę lub inny właściciel, zmień adres w znacznikach `og:url` i `og:image` (podgląd linku) na początku każdego pliku HTML. Gry działają bez tej zmiany — dotyczy ona tylko obrazka w podglądzie linku.

## Wspólne cechy wszystkich gier

- **Ustawienia dostępności** — większy tekst, wysoki kontrast, ograniczone animacje. Wybór w menu działa we wszystkich grach i odwrotnie (pamięć przeglądarki, klucz `kazdyMaMiejsce.ustawienia`). Bez dostępu do pamięci gry działają normalnie, tylko bez zapamiętywania.
- **Wspólne postacie** — Ada, Olek, Lena, Tomek, Kuba i Iga wyglądają tak samo i mają te same potrzeby w każdej grze. Wygląd i opisy są w module `KMM.CAST` (ten sam fragment na początku każdego pliku).
- **Czytanie na głos** — przycisk „Posłuchaj” przy wypowiedziach. Korzysta z syntezy mowy przeglądarki; jeśli przeglądarka jej nie ma, przycisk się nie pojawia.
- **Wersja angielska** — przycisk z globusem (**English / Polski**, na telefonie **EN / PL**) obok „Wszystkie gry” w każdej grze, w menu i w przewodniku. Przełącza język od razu, bez utraty postępu w grze. Wybór obowiązuje we wszystkich grach (klucz `kazdyMaMiejsce.jezyk`) i przechodzi przez linki także bez pamięci przeglądarki. Link z `?lang=en` (lub `?lang=pl`) otwiera stronę od razu w danym języku. Czytanie na głos używa wtedy angielskiego głosu (en-GB). Treści, zasady i wyniki gier są takie same w obu językach.
- **Przycisk „Wszystkie gry”** — w pasku każdej gry; zatrzymuje dźwięk i czytanie, wraca do menu.
- **Tryb offline** — po pierwszym otwarciu strony z internetu menu, przewodnik i wszystkie gry działają bez sieci. Zestaw można też dodać do ekranu głównego.
- **Bez danych** — gry nie łączą się z internetem, nie zbierają danych i nie używają plików cookie.

## Edycja treści

Miejsca do edycji są oznaczone w kodzie komentarzami z ikoną ✏️:

- **Menu:** lista `GAMES` i `CAST_GAMES` w `index.html`.
- **Przewodnik:** lista `GUIDES` i `CARDS` w `nauczyciel.html`.
- **Postacie:** `CAST` we wspólnym fragmencie (zmiana musi trafić do wszystkich plików — fragment jest identyczny).
- **Co powiesz?:** `SCENARIOS` — sytuacje, wypowiedzi, zakończenia, wyjaśnienia; pola `audioSrc` na nagrania uczniów (`data:audio/...`).
- **Klasa dla każdego:** `CHARACTERS`, `ITEMS`, `ZONES`, `PLACEMENT_RULES`, `NEED_RULES`.
- **Most współpracy:** `ROUNDS` w części „DANE GRY”.
- **Każdy ma swoją drogę:** „DANE MAP”; autotesty w konsoli: `KMSD.runSelfTests()`.
- **Czytanie na głos:** wywołania `KMM.readAloud('…')` na końcu każdej gry wskazują, które teksty mają przycisk „Posłuchaj”.

- **Tłumaczenie angielskie:** w każdym pliku HTML blok `TŁUMACZENIE EN` (zaraz za wspólnym fragmentem) zawiera słownik `"tekst polski": "English text"` oraz wzorce dla komunikatów z liczbami i nazwami. Po zmianie polskiego tekstu w grze dopisz lub popraw jego tłumaczenie w tym bloku — tekst bez tłumaczenia zostaje po polsku. Listę brakujących tłumaczeń pokazuje w konsoli przeglądarki `KMM.i18n.missing` (w trybie angielskim).

Po dodaniu nowego pliku lub zmianie nazwy dopisz go do listy `FILES` w `sw.js` i zwiększ numer wersji w `CACHE` (np. `v1` → `v2`).

## Co sprawdzono

Testy automatyczne w przeglądarce Chromium (lokalnie i spod adresu z podkatalogiem, jak na GitHub Pages):

- przejścia menu → gra → menu i przewodnik → gra, uruchamianie wszystkich gier;
- wspólne ustawienia w obie strony, także po przycisku „Wstecz”, oraz działanie bez pamięci przeglądarki;
- obsługa klawiaturą i widoczny fokus;
- szerokości 390, 768 i 1366 px, ze zwykłym i większym tekstem;
- spójne portrety postaci we wszystkich grach;
- czytanie na głos i jego przerywanie;
- działanie bez internetu po pierwszym otwarciu;
- wydruk przewodnika i kart;
- audyt dostępności axe-core (WCAG 2.2 AA i dobre praktyki) — bez zgłoszeń;
- wersja angielska: przełącznik (≥48 px) na wszystkich stronach przy 390 i 1280 px, zmiana języka w trakcie gry bez utraty stanu i z dokładnym powrotem do polskiego tekstu, `?lang=en`, przenoszenie języka linkami (także bez pamięci przeglądarki), angielski głos czytania, brak nieprzetłumaczonych tekstów podczas automatycznego przechodzenia gier, audyt axe-core po angielsku;
- wbudowane autotesty gier.

Tłumaczenie nie było sprawdzone przez rodzimego użytkownika języka angielskiego. Nie były wykonane testy z czytnikami ekranu, na fizycznych urządzeniach dotykowych ani z prawdziwymi głosami syntezy mowy.

## Licencja

© 2026 Michał Siwkowski. Treści i ilustracje: [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.pl). Kod: MIT. Szczegóły w [LICENSE.md](LICENSE.md).
