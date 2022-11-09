﻿using Castle.Core.Internal;
using WebEx2.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Webex2.Controllers;
using Webex2.DAL;

namespace ghostproject.Controllers
{
    [Route("[controller]/[action]")]
    public class TransaksjonController : ControllerBase
    {
        private readonly ITransaksjonRepository _db;

        private ILogger<TransaksjonController> _log;

        public TransaksjonController(ITransaksjonRepository db, ILogger<TransaksjonController> log)
        {
            _db = db;
            _log = log; 
        }


        //Lagrer en ny rad i databasen med innTransaksjon, ved kjøp og salg
        public async Task<ActionResult> Lagre(Transaksjon innTransaksjon)
        {
            if (ModelState.IsValid)
            {
                bool returOK = await _db.Lagre(innTransaksjon);
                if (!returOK)
                {
                    _log.LogInformation("Transaksjonen ble ikke lagret!");
                    return BadRequest("Transaksjonen ble ikke lagret!");
                }
                return Ok("Transaksjonen ble lagret!");
            }
            _log.LogInformation("Feil i inputvalidering!");
            return BadRequest("Feil i inputvalidering!");
        }

        //Henter alle transaksjoner fra databasen og oppretter en liste med objektene
        public async Task<ActionResult> HentAlle()
        {
            List<Transaksjon> alleTransaksjoner = await _db.HentAlle();
            return Ok(alleTransaksjoner);
        }

        //Henter alle transaksjoner til en bruker ved hjelp av brukerId
        public async Task<ActionResult> HentBrukerTransaksjoner(int brukerId)
        {
            List<Transaksjon> alleTransaksjoner = await _db.HentBrukerTransaksjoner(brukerId);
            return Ok(alleTransaksjoner);
        }

        //Henter alle transaksjoner til en aksje ved hjelp av aksjeId
        public async Task<ActionResult> HentAksjeTransaksjoner(int aksjeId) 
        {
            List<Transaksjon> alleTransaksjoner = await _db.HentAksjeTransaksjoner(aksjeId);
            return Ok(alleTransaksjoner);
        }
    }
}