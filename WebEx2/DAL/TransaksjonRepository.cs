﻿using WebEx2.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebEx2.DAL
{
    public class TransaksjonRepository : ITransaksjonRepository
    {
        private readonly DB _db;
        public TransaksjonRepository(DB db)
        {
            _db = db;
        }


        //Lagrer en ny rad i databasen med innTransaksjon, ved kjøp og salg
        public async Task<bool> Lagre(Transaksjon innTransaksjon)
        {
            try
            {
                var nyTransaksjonsRad = new Transaksjoner();
                nyTransaksjonsRad.Volum = innTransaksjon.Volum;
                nyTransaksjonsRad.Pris = innTransaksjon.Pris;
                nyTransaksjonsRad.BrukereId = innTransaksjon.BrukereId;
                nyTransaksjonsRad.FlereAksjerId = innTransaksjon.FlereAksjerId;


                _db.Transaksjoner.Add(nyTransaksjonsRad);
                await _db.SaveChangesAsync();
                return true;
            }
            catch
            {
                return false;
            }
        }

        //Henter alle transaksjoner fra databasen og oppretter en liste med objektene
        public async Task<List<Transaksjon>> HentAlle()
        {
            try
            {
                List<Transaksjon> alleTransaksjoner = await _db.Transaksjoner.Select(t => new Transaksjon
                {
                    Id = t.Id,
                    Volum = t.Volum,
                    Pris = t.Pris,
                    BrukereId = t.BrukereId,
                    FlereAksjerId = t.FlereAksjerId

                }).ToListAsync();
                return alleTransaksjoner;
            }
            catch
            {
                return null;
            }

        }

        //Henter alle transaksjoner til en bruker ved hjelp av brukerId
        public async Task<List<Transaksjon>> HentBrukerTransaksjoner(int brukerId)
        {
            try
            {
                List<Transaksjon> alleTransaksjoner = await _db.Transaksjoner.Select(t => new Transaksjon
                {
                    Id = t.Id,
                    Volum = t.Volum,
                    Pris = t.Pris,
                    BrukereId = t.BrukereId,
                    FlereAksjerId = t.FlereAksjerId
                }).Where(t => t.BrukereId == brukerId).ToListAsync();
                return alleTransaksjoner;

            }
            catch
            {
                return null;
            }

        }

        //Henter alle transaksjoner til en aksje ved hjelp av aksjeId
        public async Task<List<Transaksjon>> HentAksjeTransaksjoner(int aksjeId)
        {
            try
            {
                List<Transaksjon> alleTransaksjoner = await _db.Transaksjoner.Select(t => new Transaksjon
                {
                    Id = t.Id,
                    Volum = t.Volum,
                    Pris = t.Pris,
                    BrukereId = t.BrukereId,
                    FlereAksjerId = t.FlereAksjerId
                }).Where(t => t.FlereAksjerId == aksjeId).ToListAsync();
                return alleTransaksjoner;

            }
            catch
            {
                return null;
            }
        }
    }
}
