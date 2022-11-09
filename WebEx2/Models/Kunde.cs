﻿using System;
using System.ComponentModel.DataAnnotations;

namespace WebEx2.Models
{
    public class Kunde
    {
        [RegularExpression(@"^[0-9a-zA-ZæøåÆØÅ. \-]{2,20}$")]
        public String Brukernavn { get; set; }
        [RegularExpression(@"^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$")]
        public String Passord { get; set; }

    }
}
