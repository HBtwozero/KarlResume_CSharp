using Microsoft.EntityFrameworkCore.Migrations;

namespace KRMDataManager.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "DContact",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FullName = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    Email = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    Message = table.Column<string>(type: "nvarchar(100)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DContact", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "DContact");
        }
    }
}
