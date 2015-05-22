var Container = React.createClass({displayName: "Container",
      render:function(){
        var libraries = this.props.data;
        return React.createElement("div", {className: "content"}, 
                libraries.map(function(l){
                    var content = l.content;
                    var word = l.word;
                    var id = l.id;
                    var type = l.type;
                    
                    var collList = [];
                    console.log("#id:" + id);
                    console.log("#type:" + type);

                    for (var i = 0; i < content.length; i++) {
                        var counter = content[i]
                        var key = counter.key;
                        var values = counter.values;
                        var mean = counter.mean;
                        console.log("#counter:" + JSON.stringify(counter));
                        console.log("#key:" + JSON.stringify(key));
                        var list = [];
                        if(mean !== undefined){
                          list.push(React.createElement("div", {className: "cell"}, 
                                      React.createElement("div", {className: "sub"}, key), 
                                      React.createElement("tt", null, mean)
                                      ));
                          collList.push(list);
                        }else{

                          list.push(React.createElement("div", {className: "key"}, 
                                      React.createElement("strong", null, key)
                                    ));
                          var items= [];
                          for(var j = 0; j <values.length; j++){
                            var value = values[j];
                            var coll_word = value.coll_word;
                            var exp = value.exp;
                            console.log("#########value:" + JSON.stringify(value));
                            console.log("#########coll_word:" + JSON.stringify(coll_word));
                            console.log("#########exp:" + JSON.stringify(exp));
                            items.push(React.createElement("div", {className: "values"}, 
                                        React.createElement("div", {className: "coll-word"}, 
                                              React.createElement("div", {className: "word"}, coll_word), 
                                              React.createElement("div", {className: "exp"}, exp)
                                        )
                                      ));
                          }
                          collList.push(list);
                          collList.push(items);
                        }
                    }
                    return React.createElement("div", {className: "item-list"}, 
                              React.createElement("div", {className: "item"}, 
                                React.createElement("div", {className: "find-word"}, 
                                  React.createElement("strong", null, word), 
                                  React.createElement("span", null, " - ", type)
                                ), 
                                React.createElement("div", {className: "coll"}, 
                                  collList
                                )
                              )
                          )                              
                  })
                
                )
              }
    })
    
    var SearchExample = React.createClass({displayName: "SearchExample",
      getInitialState: function(){
          return { searchString: '' };
      },
      handleChange: function(e){
        this.setState({searchString:e.target.value});
      },
      handleEnter: function(e){
        if(e.keyCode == 13){
          return false;
        }
      },
      rateApp: function(e){
        window.open('market://details?id=com.idiots.colldict');
      },
      render: function() {
          var libraries = this.props.items,
              searchString = this.state.searchString.trim().toLowerCase();
          var collwordList;
          if(searchString.length > 0){
              // We are searching. Filter the results.
              libraries = libraries.filter(function(l){
                  if(l.word.toLowerCase() == searchString){
                    return l;
                  }
              });
              if(libraries.length == 0){
                console.log("get null value");
                collwordList=React.createElement("div", {className: "content"}, React.createElement("div", {className: "notify"}, React.createElement("i", null, "No collocation word!")))
              }else{
                collwordList=React.createElement(Container, {data: libraries})
              }

          }else
          { 
            libraries = [];
            console.log("get null value2222");
            collwordList=React.createElement("div", {className: "content"}, 
              React.createElement("div", {className: "notify"}, 
                React.createElement("i", null, " Find your collocation word")
              ), 
              React.createElement("div", {className: "bar bar-standard bar-footer-secondary"}, 
                React.createElement("button", {className: "btn btn-positive btn-block", onClick: this.rateApp}, "Rate our application")
              )
            )
          }


        return React.createElement("div", {className: "container"}, 
                      React.createElement("header", {className: "bar bar-nav header-nav-bar"}, 
                        React.createElement("h1", {className: "title app-title"}, React.createElement("strong", null, "English Collocation Dictionary"))
                      ), 
                      React.createElement("div", {className: "bar bar-standard bar-header-secondary"}, 
                          React.createElement("form", null, 
                           React.createElement("input", {type: "search", value: this.state.searchString, onKeyDown: this.handleEnter, onChange: this.handleChange, placeholder: "Enter your word here!"})
                          )
                      ), 
                      collwordList
                  )
         }
        });
                                                                                               
      React.render(
          React.createElement(SearchExample, {items: words}),
          document.body
      );
