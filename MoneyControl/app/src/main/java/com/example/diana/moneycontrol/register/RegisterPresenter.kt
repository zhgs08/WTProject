package com.example.diana.moneycontrol.register

import com.example.diana.moneycontrol.App.Companion.database
import com.example.diana.moneycontrol.model.user.User
import com.google.firebase.auth.FirebaseAuth

class RegisterPresenter(private val view : RegisterView) {


    fun register(email: String, password: String, name : String, surname : String) {
        val auth = FirebaseAuth.getInstance()
        auth.createUserWithEmailAndPassword(email, password).addOnCompleteListener {
            if (it.isSuccessful) {
                val user = User(
                    0,
                    auth.currentUser?.uid,
                    email,
                    password,
                    name,
                    surname
                )
                database.userDao().insertUser(user)
            } else {
                view.onRegisterFailed(it.exception?.message)
            }
        }
    }


}