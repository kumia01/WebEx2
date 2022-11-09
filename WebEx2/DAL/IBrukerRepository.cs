using WebEx2.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Webex2.DAL
{
    public interface IBrukerRepository
    {
        Task<bool> Lagre(Bruker innBruker);
        Task<List<Bruker>> HentAlle();
        Task<bool> Slett(int id);
        Task<Bruker> HentEn(int id);
        Task<bool> Endre(Bruker endreBruker);
    }
}
