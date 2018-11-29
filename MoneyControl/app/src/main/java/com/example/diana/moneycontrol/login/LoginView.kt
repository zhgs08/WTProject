package com.example.diana.moneycontrol.login

interface LoginView {

    fun onLoginSuccess()
    fun onLoginFailed (message : String?)
    fun setLastEmail(email: String)
}