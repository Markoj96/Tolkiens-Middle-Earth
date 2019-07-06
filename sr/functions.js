
			function isInFavorites(nameEN, descriptionEN, nameSR, descriptionSR)
			{
				var id = localStorage.getItem("index");
				if(id == null) return false;
				
				var itemEN_name;
				var itemEN;
				
				var itemEN_description;
				var description_EN;
				
				var itemSR_name;
				var itemSR;
				
				var itemSR_description;
				var description_SR;
				
				var n = parseInt(id);
				for(var  i = 1; i <= n; i++)
				{
					itemEN_name = "Item" + i;
					itemEN = localStorage.getItem(itemEN_name);
					
					itemSR_name = "Stavka" + i;
					itemSR = localStorage.getItem(itemSR_name);
					
					itemEN_description = "Description" + i;
					description_EN = localStorage.getItem(itemEN_description);
					
					itemSR_description = "Opis" + i;
					description_SR = localStorage.getItem(itemSR_description);
					
					if(itemEN == null || itemSR == null) continue;
					if((nameEN == itemEN || nameSR == itemSR) && (descriptionEN == description_EN || descriptionSR == description_SR)) return true;
				}
				return false;
			}
		
			function addToFavorites(pNameEN, pDescriptionEN, pNameSR, pDescriptionSR, pImageEN, pImageSR)
			{
				var id = localStorage.getItem("index");
				
				if(id == null) id = 1;
				else id = parseInt(id) + 1;
				
				if(!isInFavorites(pNameEN, pDescriptionEN, pNameSR, pDescriptionSR))
				{
					var itemEN = "Item" + id;
					var itemEN_name = pNameEN;
						
					var descriptionEN = "Description" + id;
					var itemEN_description = pDescriptionEN;
						
					var itemSR = "Stavka" + id;
					var itemSR_name = pNameSR;
						
					var descriptionSR = "Opis" + id;
					var itemSR_description = pDescriptionSR;
					
					var imageEN = "Image" + id;
					var itemEN_image = pImageEN;
						
					var imageSR = "Slika" + id;
					var itemSR_image = pImageSR;
					
					localStorage.setItem("index", id);
					localStorage.setItem(itemEN, itemEN_name);
					localStorage.setItem(descriptionEN, itemEN_description);
					localStorage.setItem(itemSR, itemSR_name);
					localStorage.setItem(descriptionSR, itemSR_description);
					localStorage.setItem(imageEN, itemEN_image);
					localStorage.setItem(imageSR, itemSR_image);
					alert('Stavka dodata u listu želja');
				}
				else alert('Stavka već u listi želja');
			}
			
			function HOBBIT1Reservation()
			{
				var index = document.hobbit1ticket.period.options.selectedIndex;
				var ticket = document.hobbit1ticket.period.options[index].value;
				var period = "HOBBIT1" + ticket;
				var reservations = localStorage.getItem(period);
				if(reservations == null)
				{
					reservations = 1;
				}
				else
				{
					reservations = parseInt(reservations) + 1;
				}
				
				var data_reservation = localStorage.getItem("Hobit_Neocekivano_Putovanje");
				if(data_reservation == null)
				{
					data_reservation = 1;
				}
				else
				{
					data_reservation = parseInt(data_reservation) + 1;
				}
				
				var data_reservation2 = localStorage.getItem("Hobbit_Unexpected_Journey");
				if(data_reservation2 == null)
				{
					data_reservation2 = 1;
				}
				else
				{
					data_reservation2 = parseInt(data_reservation2) + 1;
				}
				
				localStorage.setItem(period, reservations);
				localStorage.setItem("Hobit_Neocekivano_Putovanje", data_reservation);
				localStorage.setItem("Hobbit_Unexpected_Journey", data_reservation2);
				alert('Uspesna rezervacija');
			}
			
			function HOBBIT2Reservation()
			{
				var index = document.hobbit2ticket.period.options.selectedIndex;
				var ticket = document.hobbit2ticket.period.options[index].value;
				var period = "HOBBIT2" + ticket;
				var reservations = localStorage.getItem(period);
				if(reservations == null)
				{
					reservations = 1;
				}
				else
				{
					reservations = parseInt(reservations) + 1;
				}
				
				var data_reservation = localStorage.getItem("Hobit_Smaugova_Pustosenja");
				if(data_reservation == null)
				{
					data_reservation = 1;
				}
				else
				{
					data_reservation = parseInt(data_reservation) + 1;
				}
				
				var data_reservation2 = localStorage.getItem("Hobbit_Desolation_of_Smaug");
				if(data_reservation2 == null)
				{
					data_reservation2 = 1;
				}
				else
				{
					data_reservation2 = parseInt(data_reservation2) + 1;
				}
				
				localStorage.setItem(period, reservations);
				localStorage.setItem("Hobit_Smaugova_Pustosenja", data_reservation);
				localStorage.setItem("Hobbit_Desolation_of_Smaug", data_reservation2);
				alert('Uspesna rezervacija');
			}
			
			function HOBBIT3Reservation()
			{
				var index = document.hobbit3ticket.period.options.selectedIndex;
				var ticket = document.hobbit3ticket.period.options[index].value;
				var period = "HOBBIT3" + ticket;
				var reservations = localStorage.getItem(period);
				if(reservations == null)
				{
					reservations = 1;
				}
				else
				{
					reservations = parseInt(reservations) + 1;
				}
				
				var data_reservation = localStorage.getItem("Hobit_Bitka_Pet_Armija");
				if(data_reservation == null)
				{
					data_reservation = 1;
				}
				else
				{
					data_reservation = parseInt(data_reservation) + 1;
				}
				
				var data_reservation2 = localStorage.getItem("Hobbit_Battle_of_the_Five_Armies");
				if(data_reservation2 == null)
				{
					data_reservation2 = 1;
				}
				else
				{
					data_reservation2 = parseInt(data_reservation2) + 1;
				}
				
				localStorage.setItem(period, reservations);
				localStorage.setItem("Hobit_Bitka_Pet_Armija", data_reservation);
				localStorage.setItem("Hobbit_Battle_of_the_Five_Armies", data_reservation2);
				alert('Uspesna rezervacija');
			}
			
			function LOTR1Reservation()
			{
				var index = document.lotr1ticket.period.options.selectedIndex;
				var ticket = document.lotr1ticket.period.options[index].value;
				var period = "LOTR1" + ticket;
				var reservations = localStorage.getItem(period);
				if(reservations == null)
				{
					reservations = 1;
				}
				else
				{
					reservations = parseInt(reservations) + 1;
				}
				
				var data_reservation = localStorage.getItem("Gospodar_Prstenova_Druzina_Prstena");
				if(data_reservation == null)
				{
					data_reservation = 1;
				}
				else
				{
					data_reservation = parseInt(data_reservation) + 1;
				}
				
				var data_reservation2 = localStorage.getItem("LOTR_Fellowship_of_the_Ring");
				if(data_reservation2 == null)
				{
					data_reservation2 = 1;
				}
				else
				{
					data_reservation2 = parseInt(data_reservation2) + 1;
				}
				
				localStorage.setItem(period, reservations);
				localStorage.setItem("Gospodar_Prstenova_Druzina_Prstena", data_reservation);
				localStorage.setItem("LOTR_Fellowship_of_the_Ring", data_reservation2);
				alert('Uspesna rezervacija');
			}
			
			function LOTR2Reservation()
			{
				var index = document.lotr2ticket.period.options.selectedIndex;
				var ticket = document.lotr2ticket.period.options[index].value;
				var period = "LOTR2" + ticket;
				var reservations = localStorage.getItem(period);
				if(reservations == null)
				{
					reservations = 1;
				}
				else
				{
					reservations = parseInt(reservations) + 1;
				}
				
				var data_reservation = localStorage.getItem("Gospodar_Prstenova_Dve_Kule");
				if(data_reservation == null)
				{
					data_reservation = 1;
				}
				else
				{
					data_reservation = parseInt(data_reservation) + 1;
				}
				
				var data_reservation2 = localStorage.getItem("LOTR_Two_Towers");
				if(data_reservation2 == null)
				{
					data_reservation2 = 1;
				}
				else
				{
					data_reservation2 = parseInt(data_reservation2) + 1;
				}
				
				localStorage.setItem(period, reservations);
				localStorage.setItem("Gospodar_Prstenova_Dve_Kule", data_reservation);
				localStorage.setItem("LOTR_Two_Towers", data_reservation2);
				alert('Uspesna rezervacija');
			}

			function LOTR3Reservation()
			{
				var index = document.lotr3ticket.period.options.selectedIndex;
				var ticket = document.lotr3ticket.period.options[index].value;
				var period = "LOTR3" + ticket;
				var reservations = localStorage.getItem(period);
				if(reservations == null)
				{
					reservations = 1;
				}
				else
				{
					reservations = parseInt(reservations) + 1;
				}
				
				var data_reservation = localStorage.getItem("Gospodar_Prstenova_Povratak_Kralja");
				if(data_reservation == null)
				{
					data_reservation = 1;
				}
				else
				{
					data_reservation = parseInt(data_reservation) + 1;
				}
				
				var data_reservation2 = localStorage.getItem("LOTR_Return_of_the_King");
				if(data_reservation2 == null)
				{
					data_reservation2 = 1;
				}
				else
				{
					data_reservation2 = parseInt(data_reservation2) + 1;
				}
				
				localStorage.setItem(period, reservations);
				localStorage.setItem("Gospodar_Prstenova_Povratak_Kralja", data_reservation);
				localStorage.setItem("LOTR_Return_of_the_King", data_reservation2);
				alert('Uspesna rezervacija');
			}
			
			function getReservation(name)
			{
				var num = localStorage.getItem(name);
				if(num == null) num = 0;
				return num;
			}
			
			function sortAlphaNumeric()
			{
				var toSort = document.getElementById("u_bioskopima");

				var childs = toSort.children;

				var sortMe = [];
				var temp = 0;
				for(var i = 0; i < childs.length; i++)
				{
					if(!childs[i].id)
					{
						continue;
					}
					
					var elements = childs[i].children;
					for(var j = 0; j < elements.length; j++)
					{
						if(!elements[j].id)
						{
							continue;
						}
						
						var item = elements[j];
						var sort_value = item.getAttribute("data-name");
						var object =
						{
							name:sort_value,
							element:elements[j]
						};
						sortMe.push(object);
					}
					temp = j;
				}
				function compare(a, b)
				{
					const nameA = a.name.toLowerCase();
					const nameB = b.name.toLowerCase();
					
					let comparison = 0;
					if(nameA > nameB)
					{
						comparison = 1;
					}
					else if(nameA < nameB)
					{
						comparison = -1;
					}
					return comparison;
					
				}
				
				sortMe.sort(compare);

				var deck1 = document.getElementById("deck1");
				deck1.innerHTML = "";

				var deck2 = document.getElementById("deck2");
				deck2.innerHTML = "";

				var k;
				for(k = 0; k < 3; k++)
				{
					deck1.appendChild(sortMe[k].element);
				}

				for(k = 3; k < 6; k++)
				{
					deck2.appendChild(sortMe[k].element);
				}
			}
			
			function sortReservation()
			{
				var toSort = document.getElementById("u_bioskopima");

				var childs = toSort.children;

				var sortMe = [];
				var temp = 0;
				for(var i = 0; i < childs.length; i++)
				{
					if(!childs[i].id)
					{
						continue;
					}
					
					var elements = childs[i].children;
					for(var j = 0; j < elements.length; j++)
					{
						if(!elements[j].id)
						{
							continue;
						}
						var item = elements[j];
						var data_name = item.getAttribute("data-name")
						var sort_value = localStorage.getItem(data_name);
						if(sort_value == null) sort_value = 0;
						
						var object =
						{
							num:parseInt(sort_value),
							element:elements[j]
						};
						sortMe.push(object);
					}
					temp = j;
				}
				
				
				sortMe.sort
				(
					function(a, b)
					{
						return a.num - b.num;
					}
				);

				var deck1 = document.getElementById("deck1");
				deck1.innerHTML = "";

				var deck2 = document.getElementById("deck2");
				deck2.innerHTML = "";

				var k;
				for(k = 0; k < 3; k++)
				{
					deck1.appendChild(sortMe[k].element);
				}

				for(k = 3; k < 6; k++)
				{
					deck2.appendChild(sortMe[k].element);
				}
			}
			
			function sortAlphaNumericEN()
			{
				var toSort = document.getElementById("in_cinemas");

				var childs = toSort.children;

				var sortMe = [];
				var temp = 0;
				for(var i = 0; i < childs.length; i++)
				{
					if(!childs[i].id)
					{
						continue;
					}
					
					var elements = childs[i].children;
					for(var j = 0; j < elements.length; j++)
					{
						if(!elements[j].id)
						{
							continue;
						}
						var item = elements[j];
						
						var sort_value = item.getAttribute("data-name");
						var object =
						{
							name:sort_value,
							element:elements[j]
						};
						sortMe.push(object);
					}
					temp = j;
				}
				function compare(a, b)
				{
					const nameA = a.name.toLowerCase();
					const nameB = b.name.toLowerCase();
					
					let comparison = 0;
					if(nameA > nameB)
					{
						comparison = 1;
					}
					else if(nameA < nameB)
					{
						comparison = -1;
					}
					return comparison;
					
				}
				
				sortMe.sort(compare);

				var deck1 = document.getElementById("deck1");
				deck1.innerHTML = "";

				var deck2 = document.getElementById("deck2");
				deck2.innerHTML = "";

				var k;
				for(k = 0; k < 3; k++)
				{
					deck1.appendChild(sortMe[k].element);
				}

				for(k = 3; k < 6; k++)
				{
					deck2.appendChild(sortMe[k].element);
				}
			}
			
			function sortReservationEN()
			{
				var toSort = document.getElementById("in_cinemas");

				var childs = toSort.children;

				var sortMe = [];
				var temp = 0;
				for(var i = 0; i < childs.length; i++)
				{
					if(!childs[i].id)
					{
						continue;
					}
					
					var elements = childs[i].children;
					for(var j = 0; j < elements.length; j++)
					{
						if(!elements[j].id)
						{
							continue;
						}
						var item = elements[j];
						var data_name = item.getAttribute("data-name")
						var sort_value = localStorage.getItem(data_name);
						if(sort_value == null) sort_value = 0;
						
						var object =
						{
							num:parseInt(sort_value),
							element:elements[j]
						};
						sortMe.push(object);
					}
					temp = j;
				}
				
				
				sortMe.sort
				(
					function(a, b)
					{
						return a.num - b.num;
					}
				);

				var deck1 = document.getElementById("deck1");
				deck1.innerHTML = "";

				var deck2 = document.getElementById("deck2");
				deck2.innerHTML = "";

				var k;
				for(k = 0; k < 3; k++)
				{
					deck1.appendChild(sortMe[k].element);
				}

				for(k = 3; k < 6; k++)
				{
					deck2.appendChild(sortMe[k].element);
				}
			}