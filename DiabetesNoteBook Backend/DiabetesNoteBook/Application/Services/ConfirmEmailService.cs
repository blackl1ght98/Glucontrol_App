﻿using Microsoft.EntityFrameworkCore;
using DiabetesNoteBook.Domain.Models;
using DiabetesNoteBook.Infrastructure.Interfaces;
using DiabetesNoteBook.Application.DTOs;
using DiabetesNoteBook.Application.Interfaces;

namespace DiabetesNoteBook.Application.Services
{
    //Hemos creado una interfaz para que el componente sea reutilizable por eso esta clase se ha
    //vinculado a una interfaz
    public class ConfirmEmailService : IConfirmEmailService
    {
        //Llamamos a base de datos y servicio que se encarga de guardar
        private readonly DiabetesNoteBookContext _context;
        private readonly IConfirmationRegisterRepository _confirmationRegisterRepository;
        //Creamos el constructor
        public ConfirmEmailService(DiabetesNoteBookContext context, IConfirmationRegisterRepository confirmationRegisterRepository)
        {
            _context = context;
            _confirmationRegisterRepository = confirmationRegisterRepository;

        }
        //Agregamos el metodo que esta en la interfaz junto a su DTOConfirmRegistrtion
        public async Task ConfirmEmail(DTOConfirmRegistrtion confirm)
        {
            //Buscamos en base de datos si existe el usuario en base a su id
            var usuarioUpdate = _context.Usuarios.AsTracking().FirstOrDefault(x => x.Id == confirm.UserId);
            //ConfirmacionEmail esto lo establecemos a true una vez que el usuario haya confirmado su email
            usuarioUpdate.ConfirmacionEmail = true;
            //Llamamos al servicio _confirmationRegisterRepository encargado de gurdar y actualizar los datos
            await _confirmationRegisterRepository.ConfirmationRegisterTrue(usuarioUpdate);
        }
    }
}