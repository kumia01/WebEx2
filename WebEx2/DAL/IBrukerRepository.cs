using WebEx2.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace WebEx2.DAL
{
    public interface IBrukerRepository
    {
        Task<bool> Lagre(Bruker innBruker);
        Task<List<Bruker>> HentAlle();
        Task<bool> Slett(int id);
        Task<Bruker> HentEn(int id);
        Task<bool> Endre(Bruker endreBruker);
        Task<bool> LoggInn(Kunde kunde);
        Task<bool> LagreBruker(Kunde innKunde);
        Task<bool> SlettBruker(int id);
        Task<Kunde> HentKundeId(Kunde kunde);
    }
}
