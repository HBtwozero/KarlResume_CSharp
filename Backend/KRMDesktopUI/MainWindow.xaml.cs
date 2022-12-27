using KRMDataManager.Library.Interfaces;
using KRMDataManager.Library.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace KRMDesktopUI
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        private readonly IBookServices _bookServices;
        private readonly IMongoDbContext mongoDbContext;
        public MainWindow(IMongoDbContext context)
        {
            InitializeComponent();
            //Dependency Injection to create new instance
            // _bookServices = bookServices;
            mongoDbContext = context;
            _bookServices = (IBookServices)mongoDbContext.GetBooksCollection();
        }

        private void Button_Click(object sender, RoutedEventArgs e)
        {
            // BookModel book = 
           var book= _bookServices.GetBooks();

            MessageBox.Show($"Book details are{book}");
        }
    }
}
