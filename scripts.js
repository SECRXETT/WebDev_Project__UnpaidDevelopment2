// scripts.js - populate the Templates table from a local JS array

const templates = [
{ name: 'Ferrari F8 Tributo', type: 'Supercar', description: 'A twin-turbo V8 rocket built for speed and sharp handling.' },
{ name: 'Toyota Supra MK4', type: 'Sports Car', description: 'A 90s icon known for its tunability and legendary 2JZ engine.' },
{ name: 'Porsche 911 Carrera', type: 'Sports Car', description: 'A timeless rear-engine classic with razor-sharp driving dynamics.' },
{ name: 'Ford Mustang GT', type: 'Muscle Car', description: 'A V8-powered American staple with bold styling and big sound.' },
{ name: 'Honda Civic Type R', type: 'Hot Hatch', description: 'A track-focused hatchback with wild styling and serious performance.' },
{ name: 'Lamborghini Huracán EVO', type: 'Supercar', description: 'A loud, angular V10 machine built for speed and drama.' },
{ name: 'Mazda RX-7 FD', type: 'Sports Car', description: 'A lightweight rotary-powered legend with sleek, curvy styling.' },
{ name: 'BMW M3 E46', type: 'Performance Coupe', description: 'A beloved inline-six icon praised for balance and precision.' },
{ name: 'Audi RS6 Avant', type: 'Performance Wagon', description: 'A twin-turbo family hauler that accelerates like a supercar.' },
{ name: 'Nissan GT-R R35', type: 'Supercar', description: 'A high-tech AWD beast known as “Godzilla” for a reason.' },
{ name: 'Chevrolet Corvette C8', type: 'Sports Car', description: 'A mid-engine American exotic offering huge performance for the price.' },
{ name: 'Jeep Wrangler Rubicon', type: 'Off-Road SUV', description: 'A rugged 4x4 built to conquer trails, rocks, and anything wild.' },

];

function populateTemplatesTable() {
  const tbody = document.querySelector('#templatesTable tbody');
  if (!tbody) return;
  tbody.innerHTML = '';

  templates.forEach(t => {
    const tr = document.createElement('tr');
    const nameTd = document.createElement('td');
    nameTd.textContent = t.name;
    const typeTd = document.createElement('td');
    typeTd.textContent = t.type;
    const descTd = document.createElement('td');
    descTd.textContent = t.description;

    tr.appendChild(nameTd);
    tr.appendChild(typeTd);
    tr.appendChild(descTd);
    tbody.appendChild(tr);
  });
}

window.addEventListener('DOMContentLoaded', () => {
  populateTemplatesTable();
});
