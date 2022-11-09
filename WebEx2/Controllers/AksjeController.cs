﻿using WebEx2.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Metadata;
using System.Runtime.InteropServices.WindowsRuntime;
using System.Security.Cryptography;
using System.Threading.Tasks;
using WebEx2.DAL;

namespace WebEx2.Controllers
{

    [Route("[controller]/[action]")]
    public class AksjeController : ControllerBase
    {
        private readonly IAksjeRepository _dbAksje;

        private ILogger<AksjeController> _log;

        public AksjeController(IAksjeRepository db, ILogger<AksjeController> log)
        {
            _dbAksje = db;
            _log = log;
        }

        //Henter alle aksjer fra DB og returner liste med Aksje objekter
        public async Task<ActionResult> HentAlle()
        {
            List<Aksje> alleAksjer = await _dbAksje.HentAlle();
            return Ok(alleAksjer);
        }

        //Henter en aksje fra DB ved hjelp av aksje id
        public async Task<ActionResult> HentEn(int id)
        {
            Aksje enAksje = await _dbAksje.HentEn(id);
            if (enAksje == null)
            {
                _log.LogInformation("Finner ikke aksjen!");
                return NotFound("Finner ikke aksjen!");
            }
            return Ok("Fant aksjen");
        }

        //Endrer prisen på alle aksjer i DB, setter den eldre prisen til gammelPris
        public async Task<ActionResult> endrePris()
        {
            bool returOK = await _dbAksje.endrePris();
            if(!returOK)
            {
                _log.LogInformation("Prisen på aksjene ble ikke endret!");
                return BadRequest("Prisen på aksjene ble ikke endret!");
            }
            return Ok("Prisen på aksjen ble endret");
        }
    }
}