﻿
using WebEx2.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using WebEx2.DAL;
using Microsoft.AspNetCore.Http;

namespace WebEx2.Controllers
{

    [Route("[controller]/[action]")]
    public class BrukerController : ControllerBase
    {
        private readonly IBrukerRepository _db;

        private ILogger<BrukerController> _log;

        public const string _loggetInn = "loggetInn";

        public BrukerController(IBrukerRepository db, ILogger<BrukerController> log)
        {
            _db = db;
            _log = log; 
        }

        //Lager en ny rad i brukere tabellen med innbruker når en bruker registrerer en kunde,
        //lager også ny rad i poststeder tabellen om poststed ikke finnes fra før av
        public async Task<ActionResult> Lagre(Bruker innBruker)
        {
            if (ModelState.IsValid)
            {
                bool returOK = await _db.Lagre(innBruker);
                if (!returOK)
                {
                    _log.LogInformation("Brukeren ble ikke lagret!");
                    return BadRequest("Brukeren ble ikke lagret!");
                }
                return Ok("Brukeren ble lagret");
            }
            _log.LogInformation("Feil i inputvalidering!");
            return BadRequest("Feil i inputvalidering!");
        }

        //Henter alle brukere fra brukere tabellen i DB, returnerer liste av Bruker objekt
        public async Task<ActionResult> HentAlle()
        {
            if (string.IsNullOrEmpty(HttpContext.Session.GetString(_loggetInn)))
            {
                return Unauthorized();
            }
            List<Bruker> alleBrukere = await _db.HentAlle();
            return Ok(alleBrukere);
        }

        //Sletter en brukerrad ved hjelp av bruker id
        public async Task<ActionResult> Slett(int id)
        {
            if (string.IsNullOrEmpty(HttpContext.Session.GetString(_loggetInn)))
            {
                return Unauthorized();
            }
            bool returOK = await _db.Slett(id);
            if (!returOK)
            {
                _log.LogInformation("Brukeren ble ikke slettet!");
                return BadRequest("Brukeren ble ikke slettet!");
            }
            return Ok("Brukeren ble slettet");
        }

        //Henter en bruker fra DB ve hjelp av bruker id
        public async Task<ActionResult> HentEn(int id)
        {
            if (string.IsNullOrEmpty(HttpContext.Session.GetString(_loggetInn)))
            {
                return Unauthorized();
            }
            Bruker enBruker = await _db.HentEn(id);
            if (enBruker == null)
            {
                _log.LogInformation("Fant ikke brukeren!");
                return NotFound("Fant ikke brukeren!");
            }
            return Ok(enBruker);
        }

        //Endrer en bruker ved hjelp av bruker id og redigerer brukerraden i DB
        public async Task<ActionResult> Endre(Bruker endreBruker)
        {
            if (string.IsNullOrEmpty(HttpContext.Session.GetString(_loggetInn)))
            {
                return Unauthorized();
            }
            if (ModelState.IsValid)
            {
                bool returOK = await _db.Endre(endreBruker);
                if (!returOK)
                {
                    _log.LogInformation("Brukeren ble ikke endret!");
                    return BadRequest("Brukeren ble ikke endret!");
                }
                return Ok("Brukeren endret");
            }
            _log.LogInformation("Feil i inputvalidering!");
            return BadRequest("Feil i inputvalidering!");
            
        }

        public async Task<ActionResult> LagreBruker(Kunde innKunde)
        {
            if (ModelState.IsValid)
            {
                bool returOK = await _db.LagreBruker(innKunde);
                if (!returOK)
                {
                    _log.LogInformation("Brukeren ble ikke lagret!");
                    return BadRequest("Brukeren ble ikke lagret!");
                }
                return Ok("Brukeren ble lagret");
            }
            _log.LogInformation("Feil i inputvalidering!");
            return BadRequest("Feil i inputvalidering!");
        }

        public async Task<ActionResult> SlettBruker(int id)
        {
            if (string.IsNullOrEmpty(HttpContext.Session.GetString(_loggetInn)))
            {
                return Unauthorized();
            }
            bool returOK = await _db.SlettBruker(id);
            if (!returOK)
            {
                _log.LogInformation("Brukeren ble ikke slettet!");
                return BadRequest("Brukeren ble ikke slettet!");
            }
            return Ok("Brukeren ble slettet");
        }

        public async Task<ActionResult> LoggInn(Kunde kunde)
        {
            if (ModelState.IsValid)
            {
                bool returnOK = await _db.LoggInn(kunde);
                if (!returnOK)
                {
                    _log.LogInformation("Innlogging feilet for bruker " + kunde.Brukernavn + "!");
                    HttpContext.Session.SetString(_loggetInn, "");
                    return Ok(false);
                }
                HttpContext.Session.SetString(_loggetInn, "LoggetInn");
                return Ok(true);
            }
            _log.LogInformation("Feil i inputvalidering!");
            return BadRequest("Feil i inputvalidering på server!");
        }

        public async Task<ActionResult> HentKundeId(Kunde kunde)
        {
            if (string.IsNullOrEmpty(HttpContext.Session.GetString(_loggetInn)))
            {
                return Unauthorized();
            }
            Kunde funnetKunde = await _db.HentKundeId(kunde);
            if (funnetKunde == null)
            {
                _log.LogInformation("Fant ikke kunden!");
                return NotFound("Fant ikke kunden!");
            }
            return Ok(funnetKunde);
        }

        public void LoggUt()
        {
            HttpContext.Session.SetString(_loggetInn, "");
        }
    }
}
