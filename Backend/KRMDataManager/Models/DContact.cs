using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace KRMDataManager.Models
{
    public class DContact
    {
        [Key]
        public int Id { get; set; }

        [Column(TypeName="nvarchar(100)")]
        public string FullName { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string Email { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string Message { get; set; }

    }
}
