#include <Arduino.h>
#include <DHT.h>

//DHT Objekt hinzufuegen
DHT dht(2, DHT22);

void setup() {
  Serial.begin(9600);
  //Testen ob der serielle Monitor funktioniert
  Serial.println("DHT Test");
  //Lesen beginnen
  dht.begin();
}

void loop() {
  //Verzoegerung muss eingebaut werden, da Module nicht so schnell sind.
  delay(2000); 
  //Temperatur und Feuchtigkeit auslesen mit zugehoerigen Funktionen
  float t = dht.readTemperature();
  float h = dht.readHumidity();
  //Auf fehlerhafte Werte pruefen
  if(isnan(t) || isnan(h)){
    Serial.println("Werte konnten nicht ausgelesen werden!");
  }
  else{
    Serial.print("Temperatur: ");
    Serial.print(t);
    Serial.print(" Grad Celsius");
    Serial.print("\t");
    Serial.print("Luftfeuchtigkeit: ");
    Serial.print(h);
    Serial.println("%");
  }

}

