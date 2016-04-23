

#how to install django 

## Mac os:

```
brew install python
```

```
pip install virtualenvwrapper
```


- Put this on your `.bashrc` or on your `.zshrc`
```
# set where virutal environments will live
export WORKON_HOME=$HOME/.virtualenvs
# ensure all new environments are isolated from the site-packages directory
export VIRTUALENVWRAPPER_VIRTUALENV_ARGS='--no-site-packages'
# use the same directory for virtualenvs as virtualenvwrapper
export PIP_VIRTUALENV_BASE=$WORKON_HOME
# makes pip detect an active virtualenv and install to it
export PIP_RESPECT_VIRTUALENV=true
if [[ -r /usr/local/bin/virtualenvwrapper.sh ]]; then
    source /usr/local/bin/virtualenvwrapper.sh
else
    echo "WARNING: Can't find virtualenvwrapper.sh"
fi
```

```
source ~/.zashrc
```

- Now you are ready to create you Python virtual env run the follow:

```
mkvirtualenv air-check 
```

- now install the depencies:

```
pip install python -r requirements.txt
```

- ready! just go to the server folder and run:

```
python manage.py runserver
```


# Aircheck worflow
1 - View -> Map
	Weather changes (real time)
		temperature
		humidity
		pressure
		wind
		clouds
		visibility
		precipitation
	User position
	Diseases around the world
	Near diseases alerts

front -> nodejs -> sqlite

2 - Symptoms
	Cough
	Sneezing
	Nasal obstruction
	Shortness breath

front -> back(python) -> sqlite

3 - core ai

APIs
http://api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID=d102f36f3dee7fdeb597ee41e65b0a89



