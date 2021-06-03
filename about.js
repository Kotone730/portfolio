//値をグラフに表示させる
Chart.plugins.register({
    afterDatasetsDraw: function (chart, easing) {
        var ctx = chart.ctx;

        chart.data.datasets.forEach(function (dataset, i) {
            var meta = chart.getDatasetMeta(i);
            if (!meta.hidden) {
                meta.data.forEach(function (element, index) {});
            }
        });
    }
});



//=========== 円グラフ（ドーナッツ型） ============//
$('#chart01').on('inview', function(event, isInView) {//画面上に入ったらグラフを描画
if (isInView) {


var ctx=document.getElementById("chart01");//グラフを描画したい場所のid
var chart=new Chart(ctx,{
type:'doughnut',//グラフのタイプ
data:{//グラフのデータ
  datasets:[{
      backgroundColor:["#4ebfa6", "#dbdcdc"],//グラフの背景色
      data:["75","25",]//データ
    }]
},

options:{//グラフのオプション
  maintainAspectRatio: false,//CSSで大きさを調整するため、自動縮小をさせない
  cutoutPercentage:80,//中央からの空円の太さ。グラフの太さ変更
  
  tooltips: false,
  
}
});

}
});


$('#chart02').on('inview', function(event, isInView) {//画面上に入ったらグラフを描画
  if (isInView) {
  
  
  var ctx=document.getElementById("chart02");//グラフを描画したい場所のid
  var chart=new Chart(ctx,{
  type:'doughnut',//グラフのタイプ
  data:{//グラフのデータ
    datasets:[{
        backgroundColor:["#4ebfa6", "#dbdcdc"],//グラフの背景色
        data:["50","50",]//データ
      }]
  },
  
  options:{//グラフのオプション
    maintainAspectRatio: false,//CSSで大きさを調整するため、自動縮小をさせない
    cutoutPercentage:80,//中央からの空円の太さ。グラフの太さ変更
    
    tooltips: false,
    
  }
  });
  
  }
  });

  $('#chart03').on('inview', function(event, isInView) {//画面上に入ったらグラフを描画
    if (isInView) {
    
    
    var ctx=document.getElementById("chart03");//グラフを描画したい場所のid
    var chart=new Chart(ctx,{
    type:'doughnut',//グラフのタイプ
    data:{//グラフのデータ
      datasets:[{
          backgroundColor:["#4ebfa6", "#dbdcdc"],//グラフの背景色
          data:["50","50",]//データ
        }]
    },
    
    options:{//グラフのオプション
      maintainAspectRatio: false,//CSSで大きさを調整するため、自動縮小をさせない
      cutoutPercentage:80,//中央からの空円の太さ。グラフの太さ変更
      
      tooltips: false,
      
    }
    });
    
    }
    });

    $('#chart04').on('inview', function(event, isInView) {//画面上に入ったらグラフを描画
      if (isInView) {
      
      
      var ctx=document.getElementById("chart04");//グラフを描画したい場所のid
      var chart=new Chart(ctx,{
      type:'doughnut',//グラフのタイプ
      data:{//グラフのデータ
        datasets:[{
            backgroundColor:["#4ebfa6", "#dbdcdc"],//グラフの背景色
            data:["25","75",]//データ
          }]
      },
      
      options:{//グラフのオプション
        maintainAspectRatio: false,//CSSで大きさを調整するため、自動縮小をさせない
        cutoutPercentage:80,//中央からの空円の太さ。グラフの太さ変更
        
        tooltips: false,
        
      }
      });
      
      }
      });

      $('#chart05').on('inview', function(event, isInView) {//画面上に入ったらグラフを描画
        if (isInView) {
        
        
        var ctx=document.getElementById("chart05");//グラフを描画したい場所のid
        var chart=new Chart(ctx,{
        type:'doughnut',//グラフのタイプ
        data:{//グラフのデータ
          datasets:[{
              backgroundColor:["#4ebfa6", "#dbdcdc"],//グラフの背景色
              data:["50","50",]//データ
            }]
        },
        
        options:{//グラフのオプション
          maintainAspectRatio: false,//CSSで大きさを調整するため、自動縮小をさせない
          cutoutPercentage:80,//中央からの空円の太さ。グラフの太さ変更
          
          tooltips: false,
          
        }
        });
        
        }
        });

        $('#chart06').on('inview', function(event, isInView) {//画面上に入ったらグラフを描画
          if (isInView) {
          
          
          var ctx=document.getElementById("chart06");//グラフを描画したい場所のid
          var chart=new Chart(ctx,{
          type:'doughnut',//グラフのタイプ
          data:{//グラフのデータ
            datasets:[{
                backgroundColor:["#4ebfa6", "#dbdcdc"],//グラフの背景色
                data:["50","50",]//データ
              }]
          },
          
          options:{//グラフのオプション
            maintainAspectRatio: false,//CSSで大きさを調整するため、自動縮小をさせない
            cutoutPercentage:80,//中央からの空円の太さ。グラフの太さ変更
            
            tooltips: false,
            
          }
          });
          
          }
          });

          $('#chart07').on('inview', function(event, isInView) {//画面上に入ったらグラフを描画
            if (isInView) {
            
            
            var ctx=document.getElementById("chart07");//グラフを描画したい場所のid
            var chart=new Chart(ctx,{
            type:'doughnut',//グラフのタイプ
            data:{//グラフのデータ
              datasets:[{
                  backgroundColor:["#4ebfa6", "#dbdcdc"],//グラフの背景色
                  data:["25","75",]//データ
                }]
            },
            
            options:{//グラフのオプション
              maintainAspectRatio: false,//CSSで大きさを調整するため、自動縮小をさせない
              cutoutPercentage:80,//中央からの空円の太さ。グラフの太さ変更
              
              tooltips: false,
              
            }
            });
            
            }
            });

            $('#chart08').on('inview', function(event, isInView) {//画面上に入ったらグラフを描画
              if (isInView) {
              
              
              var ctx=document.getElementById("chart08");//グラフを描画したい場所のid
              var chart=new Chart(ctx,{
              type:'doughnut',//グラフのタイプ
              data:{//グラフのデータ
                datasets:[{
                    backgroundColor:["#4ebfa6", "#dbdcdc"],//グラフの背景色
                    data:["25","75",]//データ
                  }]
              },
              
              options:{//グラフのオプション
                maintainAspectRatio: false,//CSSで大きさを調整するため、自動縮小をさせない
                cutoutPercentage:80,//中央からの空円の太さ。グラフの太さ変更
                
                tooltips: false,
                
              }
              });
              
              }
              });
