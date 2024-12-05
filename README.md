# **Task Management Website**  

## **Description**  
Ce projet est une application web de gestion des tâches, développée avec **React** pour le frontend, **Node.js** pour le backend, et **Mongoose** pour la gestion de la base de données MongoDB.  
**⚠️ Remarque : L'application n'est pas encore optimisée pour les appareils mobiles.**  

---

## **Fonctionnalités**  
- **Création de tâches** : Ajoutez de nouvelles tâches avec des détails spécifiques.  
- **Mise à jour des tâches** : Modifiez le statu des tâches existantes.  
- **Suppression des tâches** : Supprimez des tâches terminées ou inutiles.  
- **Liste des tâches** : Affichez toutes les tâches dans une interface conviviale.  

---

## **Technologies Utilisées**  
- **Frontend** : React  
- **Backend** : Node.js (version `v22.9.0`)  
- **Base de données** : MongoDB avec Mongoose  
- **Autres outils** : Express.js  

---

## **Prérequis**  
Avant de commencer, assurez-vous d'avoir installé :  
- **Node.js** (version recommandée : `v22.9.0`)  
- **MongoDB** (local ou hébergé sur un service tel que Atlas)  

---

## **Installation et Exécution**  

### **1. Cloner le dépôt**  
```bash
git clone <url-du-repo>
cd <nom-du-projet>
```

### **2. Installation des dépendances**  
Installez les dépendances pour le backend :  
```bash
cd backend
npm install
```

Puis pour le frontend :  
```bash
cd ../frontend
npm install
```


### **3. Lancer le projet**  
- Démarrez le backend :  
```bash
cd backend
npm run start
```

- Démarrez le frontend :  
```bash
cd ../frontend
npm start
```

L'application sera accessible sur `http://localhost:3000`.

---

## **Limitations**  
- L'application **n'est pas encore responsive** et n'est pas adaptée pour une utilisation sur mobile.  
- L'authentification des utilisateurs n'est pas encore implémentée.  
